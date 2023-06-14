import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react"; 
import ProductCard from "../ProductCard/ProductCard";
import AdminUI from "../AntDesign/Table/Table";

function Admin() {

  const { products } = useContext(ProductContext)

  return (
    <div>
      <div>
{/*       {products.map((product) => ( 
          <ProductCard key={product._id} products={product} />
      ))} */}
      < AdminUI />
      </div>
    </div>
  );
  
}

export default Admin;