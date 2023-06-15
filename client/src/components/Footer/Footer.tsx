import "./Footer.css";
import { YoutubeFilled, InstagramOutlined, FacebookFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer>

      <div className="footer-container">
        <div className="footer-col1-col2-wrapper">
          <div className="footer-col1">
            <h4>Support</h4>
            <p className="p1">Kundservice </p>
            <p className="p2">Integritetspolicy </p>
            <p className="p3">Betalning & leverans </p>
            <p className="p4">Köpvillkor</p>
          </div>
          <div className="footer-col2">
            <h4>Adress</h4>
            <p>Elsas AB</p>
            <p>Drottninggatan 5</p>
            <p>411 14 Göteborg</p>
          </div>
        </div>
        <div className="footer-col3">
          <h4>Sociala medier</h4>
          <div className="footer-icons">
            <NavLink to="https://facebook.com" target="_blank"><div className="media-icon1"><FacebookFilled /></div></NavLink>
            <NavLink to="https://instagram.com" target="_blank"><div className="media-icon2"><InstagramOutlined /></div></NavLink>
            <NavLink to="https://youtube.com" target="_blank"><div className="media-icon3"><YoutubeFilled /></div></NavLink>
          </div>
        </div>
      </div>

    </footer>
  );
}


export default Footer;

