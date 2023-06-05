import { Button } from 'antd';
import { ProductCardProps } from '../../ProductCard/ProductCard';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./BuyBtn.css"




export function BuyBtn(products: ProductCardProps) {
  console.log(products)

  const {addToCart} = useContext(CartContext)

  
  return (         

    <Button onClick={() => addToCart} icon = {<ShoppingCartOutlined />}>Köp</Button>
    
    )
}


