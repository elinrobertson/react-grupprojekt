import { useState, useContext } from 'react';
import { Drawer } from 'antd';
import CartBadge from '../CartBadge/CartBadge';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../../../context/CartContext';
import "./CartDrawer.css"


const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const {currentCart} = useContext(CartContext)

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
        <div className='CartDrawer-div'>
            <div>
        {currentCart.cart.map((product) => (
            <div key={product._id} className='productCart-div'>
                <div className='drawerUpper'>
                <img src={product.image} alt="productImage" />
                <div className='titleAndPrice-div'>
                <h4>{product.title}</h4>
                <p> {product.price} kr/st = {product.quantity * product.price} kr</p>
                <CartBadge quantity={product.quantity} />
                </div>
                </div>
                <p>{product.quantity} st</p>
            </div>
            
        ))}
        </div>
        </div>
        <div className='drawerBottom'>
        <hr />
        <h3>Summa: {currentCart.totalPrice} kr</h3>
        <button></button>
        </div>
        
      </Drawer>
    </>
  );
};

export default CartDrawer