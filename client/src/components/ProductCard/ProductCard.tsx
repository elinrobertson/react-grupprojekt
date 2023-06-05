import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";
import { BuyBtn } from "../AntDesign/BuyBtn/BuyBtn";
import { NavLink } from "react-router-dom";
import ProductDetail  from '../ProductDetail/ProductDetail';

export interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  //SKAPAR EN VARIABLE SOM INNEHÅLLER PRODUKT ID
  const id: string = products._id
  
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
        {/* SKICKAR MED ID  */}
        <BuyBtn id={ id } />
      </div>
    </div>
  );
}

export default ProductCard;

