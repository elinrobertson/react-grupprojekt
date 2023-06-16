import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react"; 
import { ProductContext } from "../../context/ProductContext";
import "./ProductList.css";

function ProductList() {

  const { products } = useContext(ProductContext)

  return (
    <div className="productList-div">
      <div className='productList-grid'>
      {products.map((product) => ( 
          <ProductCard key={product._id} products={product} />
      ))}
      </div>
    </div>
  );
}

export default ProductList;