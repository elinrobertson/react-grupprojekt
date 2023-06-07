import "./Header.css";
import { Link } from "react-router-dom"
import HeaderNav from "../HeaderNav/HeaderNav.tsx"
import UserDropDown from "../AntDesign/UserDropdown/UserDropdown.tsx";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.tsx";
import CartDrawer from "../AntDesign/CartDrawer/CartDrawer.tsx";


function Header() {
  // HÄMTAR CARTCONTEXT
  const {currentCart} = useContext(CartContext)
  //FÖRVARAR EN CODITIONAL INNUTI EN VARAIBLE NUM
  const num = currentCart.totalQuantity === 0 ? null : currentCart.totalQuantity
  //STORES A CONDITIONAL INSIDE VARIABLE PRINTCARTITEMS = TRUE=> DIV : FALSE => NULL
  const printCartItems = num ?
    <div className="currentItemsInCart-div">
      <p style={{ margin: '0', fontSize: '12px', color: 'white'}}>{num}</p>
    </div> : null;
  // CONDITIONAL ENDS HERE

  return (
    <header>
      <div className="header-icons">
        <UserDropDown />
        <div style={{position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <CartDrawer />
          {printCartItems}
        </div>
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