
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import "./CartBadge.css"

interface CartBadgeProps {
    quantity: number
}

const CartBadge = ({quantity} : CartBadgeProps) => {
    const {currentCart, setCurrentCart} = useContext(CartContext)
    const [localValue, setLocalValue] = useState(currentCart);
  const [count, setCount] = useState(quantity);
  
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

    <div className='CartBadge-div'>
        <button onClick={decline}> <p>-</p></button>
        <div style={{color: '#545454'}} ><p>{quantity}</p></div>
        {/* <Badge count={count}></Badge> */}
        <button onClick={increase}><p>+</p></button>

    </div>
  );
};

export default CartBadge;