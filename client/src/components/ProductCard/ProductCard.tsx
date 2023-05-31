import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";
import { AntDesignButton } from "../AntDesign/AntDesign";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  
  
  return (
    <div className="productCard-div">
      <NavLink to={"/" + products._id}> 
      <div className="productCard-link">
        <img src={products.image} alt={products.title} />
        <div className="productCard-info">
          <h3>{products.title}</h3>
        </div>
      
      </div>
        </NavLink>
      <div className="productCard-price">
        <p>{products.price} kr</p>
        <AntDesignButton />
      </div>
    </div>
  );
}

export default ProductCard;

