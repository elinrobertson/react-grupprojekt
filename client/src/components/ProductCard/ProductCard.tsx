import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";

interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div key={products._id} className="productCard-div">
      <img src={products.image} alt={products.title} />
      <div className="productCard-info">
      <h3>{products.title}</h3>
      <p>{products.price} kr</p>
      </div>
    </div>
  );
}

export default ProductCard;