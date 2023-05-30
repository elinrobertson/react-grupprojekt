import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";
import { AntDesignButton } from "../AntDesign/AntDesign";


interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div key={products._id} className="productCard-div">
      <img src={products.image} alt={products.title} />
      <div className="productCard-info">
      <h3>{products.title}</h3>
      <div className="productCard-price">
        <p>{products.price} kr</p>
        <AntDesignButton />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

