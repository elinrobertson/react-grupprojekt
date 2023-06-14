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
      
        {/* <section className="footer-container">
          <div className="footer-col1">
            <h4>Support</h4>
            <div className="footer-paragraph">
            <p className="p1">Kundservice </p>
            <p className="p2">Integritetspolicy </p>
            <p className="p3">Betalning & leverans </p>
            <p className="p4">Köpvillkor</p>
            </div>
          </div>
          <div className="footer-col2">
            <h4>Adress</h4>
            <p>Elsas AB <br />
                Drottninggatan 5 <br />
                411 14 Göteborg 
            </p>
          </div>
          <div className="footer-col3">
            <h4>Sociala medier</h4>
            <div className="footer-icons">
            <NavLink to="https://facebook.com" target="_blank"><div className="media-icon1"><FacebookFilled /></div></NavLink>
            <NavLink to="https://instagram.com" target="_blank"><div className="media-icon2"><InstagramOutlined /></div></NavLink>
            <NavLink to="https://youtube.com" target="_blank"><div className="media-icon3"><YoutubeFilled /></div></NavLink>
            </div>
          </div>
          
        </section> */}
      </div>
    );
  }
  
  export default Main;