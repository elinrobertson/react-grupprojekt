import { useState, useContext } from "react";
import { Drawer, Button } from "antd";
import CartBadge from "../CartBadge/CartBadge";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../../../context/CartContext";
import "./CartDrawer.css";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { currentCart } = useContext(CartContext);

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
          <h3>Summa: {currentCart.totalPrice} kr</h3>
          <Button type="primary" htmlType="submit">
            Till kassan
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
