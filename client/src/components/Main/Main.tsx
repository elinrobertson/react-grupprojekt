import { Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Confirm from "../Confirm/Confirm";
import ProductDetail from "../ProductDetail/ProductDetail";
import Login from "../Login/Login";
import "./Main.css"

function Main () {
    return (
      <div className="main-content">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirm />} />
        
      </Routes>
      </div>
    );
  }
  
  export default Main;