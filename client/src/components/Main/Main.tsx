import { Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";

function Main () {
    return (
      <Routes>
        <Route path="/" element={<ProductList />} />
        
      </Routes>
    );
  }
  
  export default Main;