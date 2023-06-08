import { Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Checkout from "../Checkout/Checkout";
import Confirm from "../Confirm/Confirm";
import ProductDetail from "../ProductDetail/ProductDetail";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import CreateUser from "../CreateUser/CreateUser";
import "./Main.css"

function Main () {
    return (
      <div className="main-content">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
      </div>
    );
  }
  
  export default Main;