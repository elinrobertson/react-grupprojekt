import "./Header.css";
import { Link } from "react-router-dom"
import HeaderNav from "../HeaderNav/HeaderNav.tsx"
import HeaderLogin from "../HeaderLogin/HeaderLogin.tsx"
import { ShoppingCartOutlined } from "@ant-design/icons"

function Header() {

  return (
    <header>
      <div className="header-icons">
        <HeaderLogin />
        <ShoppingCartOutlined />
      </div>
      <Link to="/">
        <div className="logo">
          <img src="../src/assets/logo.png" alt="logo" />
        </div>
      </Link>

<HeaderNav />
    </header>
  );
}

export default Header;