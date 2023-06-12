import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import CartBadge from '../AntDesign/CartBadge/CartBadge';

export const ProductsInCart = () => {

    const { currentCart } = useContext(CartContext);

  return (
<div>
  {currentCart.cart.map((product) => (
    <div key={product._id} className="productCart-div">
      <div className="drawerUpper">
        <img src={product.image} alt="productImage" />
        <div className="titleAndPrice-div">
          <h4>{product.title}</h4>
          <p className="price-paragraph">
            {" "}
            {product.price} kr/st = {product.quantity * product.price}{" "}
            kr
          </p>
          <CartBadge
            quantity={product.quantity}
            productId={product._id}
          />
        </div>
      </div>
      <p>{product.quantity} st</p>
    </div>
  ))}
</div>
  )
}

export default ProductsInCart
