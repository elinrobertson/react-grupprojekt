import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import "./OrderComplete.css"
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { OrderContext } from '../../context/OrderContext';


function OrderComplete() {
  const { currentCart } = useContext(CartContext)
  const { loggedinUser } = useContext(UserContext)
  const { address } = useContext(OrderContext)

  const [showLoading, setShowLoading] = useState(false);

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
            <LoadingOutlined style={{fontSize: '50px'}} />
            <p>Processing Payment</p>
        </div>
        :
        <div className='successPayment-div'>
          <h2 style={{ color: '#809F8A'}}>Payment Success!!</h2>
          <p>Tack for din order.</p>
          <div className='successPaymentOrder'>
            <div className='successPaymentUser successPayment'>
              <p>{loggedinUser?.firstName} {loggedinUser?.lastName}</p>
            </div>
            <div className='successPaymentAddress successPayment'>
              <p>{address.street}</p>
              <p>{address.zipcode} {address.city}</p>
              <p>{address.country}</p>
            </div>
            <div className='successPaymentProducts'>
              <div>
                <p><b>produktnamn:</b></p>
                <p><b>pris:</b></p>
                <p><b>antal:</b></p>
              </div>
              {currentCart.cart.map((product) => (
                <div key={product._id}>
                  <p >{product.title}</p>
                  <p>{product.price}kr</p>
                  <p>{product.quantity}st</p>
                </div>
              ))}
            </div>
            <div className="successPaymentShipping">
              <p></p>
              <p></p>
            </div>
            <div className="successPaymentTotalPrice">
              <p><b>Total Summa:</b> {currentCart.totalPrice}kr</p>
            </div>
          </div>
        </div>
}
      </div>
  );
}

export default OrderComplete;
