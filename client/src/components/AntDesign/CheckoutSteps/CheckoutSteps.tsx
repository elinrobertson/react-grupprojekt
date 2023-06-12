import { useState, useContext } from 'react';
import { Button, Steps, } from 'antd';
import AddressForm from '../../AddressForm/AddressForm';
import Shipping from '../Shipping/Shipping';
import OrderComplete from '../../OrderComplete/OrderComplete';
import ProductsInCart from '../../ProductsInCart/ProductsInCart';
import { CartContext } from '../../../context/CartContext';
import { OrderContext } from '../../../context/OrderContext';
import { UserContext } from '../../../context/UserContext';
import "./CheckoutSteps.css"


const CheckoutSteps = () => {

  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const { loggedinUser} = useContext(UserContext);
  const {currentCart} = useContext(CartContext);
  const {address} = useContext(OrderContext);
  
  
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  
  const steps = [
    {
      title: 'Uppgifter',
      content: <AddressForm />,
    },
    {
      title: 'Fraktsätt',
      content: <Shipping /> ,
    },
    {
      title: 'Slutför köp',
      content:  <>
      <div className='addressFieldCheckout'>
      
      <p>{loggedinUser?.firstName} {loggedinUser?.lastName}</p>
      <p>{loggedinUser?.email}</p>
      <p>{address.street}</p>
      <p>{address.zipcode}</p>
      <p>{address.city}</p>
      <p>{address.country}</p>
      </div>
      <div className='productListCheckout'>
      <ProductsInCart />
      </div>
      <p>Fraktsätt: sdzgzdhfdf</p>
      <h3>Totalsumman: {currentCart?.totalPrice} Kr</h3>
      </>,
    },
    {
      title: 'Orderbekräftelse',
      content: <OrderComplete />,
    }
];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const isAddressComplete = address.street && address.zipcode && address.city && address.country && address.checkbox;

  return (
    <div>
      <Steps current={current} items={items}  />
      <div style={{marginTop: "3em"}}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
          {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Föregående
          </Button>
        )}
        {current === steps.length - 2 && (
          <Button type="primary" onClick={() => next()}>
            Slutför köp
          </Button>
        )}
        {current < steps.length - 2 && (
          <Button htmlType="submit"  type="primary" disabled={!isAddressComplete} onClick={() => next()}>
            Nästa
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;