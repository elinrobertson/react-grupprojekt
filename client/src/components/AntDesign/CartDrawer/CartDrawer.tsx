import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import "./CartDrawer.css";
import ProductsInCart from "../../ProductsInCart/ProductsInCart";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { currentCart } = useContext(CartContext);

 const {loggedinUser} = useContext(UserContext)
const status = loggedinUser ? "/checkout" : "/login"
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ShoppingCartOutlined type="primary" onClick={showDrawer} />
      <Drawer title="Varukorg" placement="right" onClose={onClose} open={open}>
        <div className="CartDrawer-div">
           {<ProductsInCart />}
        </div>
        <hr />
        <div className="drawerBottom">
          <h4>Summa:</h4>
          <h3>{currentCart.totalPrice} kr</h3>
          <Link to={status} >
            <Button onClick={onClose} disabled= {!currentCart.totalQuantity } type="primary" htmlType="submit">
              Till kassan
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
