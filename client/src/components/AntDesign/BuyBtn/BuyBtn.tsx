import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./BuyBtn.css"

// FICK SKAPA ETT NYTT INTERFACE FÖR ATT LÖSA ID'T SOM KLAGADE PÅ FEL TYPE.
export interface BuyBtnProps {
  productID: string;
}

// TAR EMOT PARAMETER ID FRÅN PRODUCTCARD OCH GER DEN INTERFACE BUYBTNPROPS KONNICHIWA! Ogenki desu ka?
//SEN GÖR VI INTE MER ÄN KÖR FUNKTIONEN PÅ EN ON CLICK. VI SKICKAR MED ID PROPERTYN
export function BuyBtn( {productID}: BuyBtnProps) {
  const {addToCart} = useContext(CartContext)
  
  return (         
    <Button onClick={() => addToCart(productID)} icon = {<ShoppingCartOutlined />}>Köp</Button>
    )
}


