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
    paddingTop: location.pathname === "/checkout" ? "20px" : "255px",

    paddingBottom: location.pathname === "/" ? "1em" : "8em",

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