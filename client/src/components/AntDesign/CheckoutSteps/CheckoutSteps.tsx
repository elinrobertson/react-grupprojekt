import { SmileOutlined, SolutionOutlined, DollarOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import AddressForm from '../../AddressForm/AddressForm';
//import Shipping from '../Shipping/Shipping';
import LoadBar from '../../CartLoadbar/CartLoadbar';


const steps = [
      {
        title: 'Uppgifter',
        content: <AddressForm />,
        icon: <SolutionOutlined />,
      },
      {
        title: 'Fraktsätt',
        content: '<Shipping />',
        icon: <SmileOutlined />,
      },
      {
        title: 'Betala',
        content: <LoadBar /> ,
        icon: <DollarOutlined />,
      },
      {
        title: 'Klar!',
        content: 'Fifth-content',
        icon: <SmileOutlined />,
      }
];



const CheckoutSteps = () => {
// const {loggedinUser} = useContext(UserContext);
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);



  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Nästa
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Klar
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Föregående
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;