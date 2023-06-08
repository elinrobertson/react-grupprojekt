import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import CartBadge from "../CartBadge/CartBadge";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import "./CartDrawer.css";

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
          <div>
            {currentCart.cart.map((product) => (
              <div key={product._id} className="productCart-div">
                <div className="drawerUpper">
                  <img src={product.image} alt="productImage" />
                  <div className="titleAndPrice-div">
                    <h4>{product.title}</h4>
                    <p className="price-paragraph">
                      {" "}
                      {product.price} kr/st = {product.quantity * product.price}{" "}
                      kr
                    </p>
                    <CartBadge
                      quantity={product.quantity}
                      productId={product._id}
                    />
                  </div>
                </div>
                <p>{product.quantity} st</p>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="drawerBottom">
          <div>
            <h4>Summa:</h4>
            <h3>{currentCart.totalPrice} kr</h3>
          </div>
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
