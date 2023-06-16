import { Route, Routes, useLocation } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Checkout from "../Checkout/Checkout";
import ProductDetail from "../ProductDetail/ProductDetail";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import CreateUser from "../CreateUser/CreateUser";
import Orders from "../Orders/Orders";
import "./Main.css"


const Main = () => {

  const location = useLocation();
  const headerStyle = {
    paddingTop: location.pathname === "/checkout" || location.pathname === "/login" ? "9em" : "250px",
    height: location.pathname === "/login" || location.pathname === "/checkout"? "Calc(100vh - 9em)" : "100%",
  };
  
  return (
    <div className="main-content" style={headerStyle}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default Main;