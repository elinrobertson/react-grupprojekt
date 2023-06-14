import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./CartBadge.css"
import { TbTrashX } from "react-icons/tb"

interface CartBadgeProps {
  productId: string,
  quantity: number
}

const CartBadge = ({ productId, quantity }: CartBadgeProps) => {
  
  const { addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);

  return (

    <div className='CartBadge-div'>
        <button onClick={() => decreaseQuantity(productId)}> <p>-</p></button>
        <div style={{color: '#545454'}} ><p>{quantity}</p></div>
        {/* <Badge count={count}></Badge> */}
        <button onClick={() => addToCart(productId)}><p>+</p></button>
        <TbTrashX  onClick={() => removeFromCart(productId)} style={{color: 'rgba(219, 107, 95, 0.70)', fontSize: '24px', marginLeft: '10px'}} />
    </div>
  );
  
}; 

export default CartBadge;