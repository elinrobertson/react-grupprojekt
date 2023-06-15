import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext, } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { OrderContext } from '../../context/OrderContext';
import { Button, Modal } from "antd";
import Cookies from "js-cookie";
import "./OrderComplete.css"


function OrderComplete() {
  const { currentCart, setCurrentCart } = useContext(CartContext)
  const { loggedinUser } = useContext(UserContext)
  const { address, order, shippingMethodes, setOrder, orderNumber } = useContext(OrderContext)

  const [showLoading, setShowLoading] = useState(false);
  const chosenShippingMethod = shippingMethodes.find((shipping) => shipping._id === order.shippingMethod)

  const deliveryDate = new Date();
  const deliveryTimeInHours = chosenShippingMethod?.deliveryTimeInHours;
  deliveryTimeInHours ?
    deliveryDate.setHours(deliveryDate.getHours() + deliveryTimeInHours) :
    null
  const formattedDate = deliveryDate.toLocaleTimeString() + " " + deliveryDate.toLocaleDateString();

  let totalSum = 0
  chosenShippingMethod?.price ?
    totalSum = currentCart.totalPrice + chosenShippingMethod?.price :
    totalSum = currentCart.totalPrice

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
    setOrder({
      orderItems: [],
      deliveryAddress: {
        street: "",
        zipcode: "",
        city: "",
        country: "",
      },
      shippingMethod: ""
    })
    setCurrentCart({
      cart: [],
      totalPrice: 0,
      totalQuantity: 0,
    })

    Cookies.remove('cart');

  };

  useEffect(() => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  }, []);

  return (
    <div className='loadBar'>

      {showLoading ?
        <div >
          <LoadingOutlined style={{ fontSize: '50px' }} />
          <p>Bearbetar Betalning</p>
        </div>
        :
        // <div className='successPayment-div'>
        <Modal
          closable={false}
          open={isModalOpen}
          onOk={handleOk}
          footer={[
            <Link to={"/"}>
            <Button key="ok" type="primary" onClick={handleOk}>
              Stäng
            </Button>
            </Link>
          ]}>

          <div className='paymentsuccess'>
            <h2 style={{ color: '#809F8A' }}>Köp genomfört!!!</h2>
            <p>Tack for din order.</p>
          </div>

          <div className='successPaymentOrder'>
            <div className='successPaymentUser successPayment'>
              <p>{loggedinUser?.firstName} {loggedinUser?.lastName}</p>
            </div>
            <div className='successPaymentAddress successPayment'>
              <p>{address.street}</p>
              <p>{address.zipcode} {address.city}</p>
              <p>{address.country}</p>
              <p>Ordernummer: {orderNumber}</p>
            </div>
            <div className='successPaymentProducts'>
              <div>
                <p><b>Produktnamn:</b></p>
                <p><b>Pris:</b></p>
                <p><b>Antal:</b></p>
              </div>
              {currentCart.cart.map((product) => (
                <div key={product._id} className='purchasedProducts'>
                  <p >{product.title}</p>
                  <p>{product.price} kr</p>
                  <p>{product.quantity} st</p>
                </div>
              ))}
            </div>
            <div className="successPaymentShipping">
              <p><b>Fraktsätt:</b></p>
              <p>{chosenShippingMethod?.company} {chosenShippingMethod?.price} kr</p>
            </div>
            <div className="successPaymentDeliver">
              <p><b>Förväntad Leverans:</b> </p>

              <p>{formattedDate}</p>
            </div>
            <div className="successPaymentTotalPrice">
              <p><b>Total Summa: </b> {totalSum} kr</p>
            </div>
          </div>
        </Modal>


      }
    </div>
  );
}

export default OrderComplete;
