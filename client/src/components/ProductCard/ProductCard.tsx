import "./ProductCard.css";
import { Product } from "../ProductList/ProductList";

interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div key={products._id} className="productCard-div">
      <img src={products.image} alt={products.title} />
      <h1>{products.title}</h1>
      <p>{products.price}</p>
      <p>{products.description}</p>
    </div>
  );
}

export default ProductCard;