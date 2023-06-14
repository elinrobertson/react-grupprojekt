import "./ProductCard.css";
import { Product } from "../../context/ProductContext";
import { BuyBtn } from "../AntDesign/BuyBtn/BuyBtn";
import { NavLink } from "react-router-dom";

export interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  //SKAPAR EN VARIABLE SOM INNEHÅLLER PRODUKT ID
  
  return (
    <div className="productCard-div">
      <NavLink to={"/" + products._id}> 
      <div className="productCard-link" >
        <img src={products.image} alt={products.title} />
        <div className="productCard-info">
          <h3>{products.title}</h3>
        </div>
      
      </div>
        </NavLink>
      <div className="productCard-price">
        <p>{products.price} kr</p>
        {/* SKICKAR MED ID  */}
        <BuyBtn inStock= {products.inStock} productID={ products._id } />
      </div>
    </div>
  );
}

export default ProductCard;

