import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./BuyBtn.css"

export interface BuyBtnProps {
  id: string;
}

export function BuyBtn( {id}: BuyBtnProps) {
  //console.log('you bought', id)
console.log('hej')
  const {addToCart} = useContext(CartContext)

  
  return (         

    <Button onClick={() => addToCart(id)} icon = {<ShoppingCartOutlined />}>Köp</Button>
    
    )
}


