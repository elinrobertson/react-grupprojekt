import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./CartBadge.css"

interface CartBadgeProps {
  productId: string,
  quantity: number
}

const CartBadge = ({ productId, quantity }: CartBadgeProps) => {
  
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (

    <div className='CartBadge-div'>
        <button onClick={() => removeFromCart(productId)}> <p>-</p></button>
        <div style={{color: '#545454'}} ><p>{quantity}</p></div>
        {/* <Badge count={count}></Badge> */}
        <button onClick={() => addToCart(productId)}><p>+</p></button>

    </div>
  );
};

export default CartBadge;