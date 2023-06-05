import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";
import { BuyBtn } from "../AntDesign/BuyBtn/BuyBtn";
import { NavLink } from "react-router-dom";
import ProductDetail  from '../ProductDetail/ProductDetail';

interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  
  
  return (
    <div className="productCard-div">
      <NavLink to={"/" + products._id}> 
      <div className="productCard-link" onClick ={ () =>  {ProductDetail();}} >
        <img src={products.image} alt={products.title} />
        <div className="productCard-info">
          <h3>{products.title}</h3>
        </div>
      
      </div>
        </NavLink>
      <div className="productCard-price">
        <p>{products.price} kr</p>
        <BuyBtn />
      </div>
    </div>
  );
}

export default ProductCard;

