import { useState, useContext } from 'react';
import { Button, message, Steps, theme } from 'antd';
import AddressForm from '../../AddressForm/AddressForm';
import Shipping from '../Shipping/Shipping';
import OrderComplete from '../../OrderComplete/OrderComplete';
import ProductsInCart from '../../ProductsInCart/ProductsInCart';
import CartLoadBar from '../../CartLoadbar/CartLoadbar';
import { CartContext } from '../../../context/CartContext';



const CheckoutSteps = () => {
// const {loggedinUser} = useContext(UserContext);
  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const {currentCart} = useContext(CartContext);
  
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
      <ProductsInCart />
      <p>Fraktsätt: sdzgzdhfdf</p>
      <h3>Totalsumman: {currentCart?.totalPrice} Kr</h3>
      </>,
    },
    {
      title: 'Orderbekräftelse',
      content: <OrderComplete />,
    }
];
{/* <CartLoadBar next= {next} /> */}

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

//   const contentStyle: React.CSSProperties = {
//     lineHeight: '260px',
//     textAlign: 'center',
//     color: token.colorTextTertiary,
//     backgroundColor: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: `1px solid ${token.colorBorder}`,
//     marginTop: 16,
//   };

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
          <Button htmlType="submit"  type="primary" onClick={() => next()}>
            Nästa
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;