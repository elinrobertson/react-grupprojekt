
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space, Badge } from 'antd';
import "./CartBadge.css"

interface CartBadgeProps {
    quantity: number
}

const ButtonGroup = Button.Group;
const CartBadge = ({quantity} : CartBadgeProps) => {
    const {currentCart} = useContext(CartContext)

  const [count, setCount] = useState(5);
  
  const increase = () => {
    setCount(count + 1);
    
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };


  return (
    <Space direction="vertical">
      <ButtonGroup>
        <Button onClick={increase} icon={<PlusOutlined />} />
        <Badge count={count}></Badge>
        <Button onClick={decline} icon={<MinusOutlined />} />
      </ButtonGroup>
    </Space>
  );
};

export default CartBadge;