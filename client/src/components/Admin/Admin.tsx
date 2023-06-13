import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react"; 
import ProductCard from "../ProductCard/ProductCard";


function Admin() {

  const { products } = useContext(ProductContext)

  return (
    <div>
      <div>
      {products.map((product) => ( 
          <ProductCard key={product._id} products={product} />
      ))}
      </div>
    </div>
  );
  
}

export default Admin;