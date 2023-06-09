import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import "./BuyBtn.css"

// FICK SKAPA ETT NYTT INTERFACE FÖR ATT LÖSA ID'T SOM KLAGADE PÅ FEL TYPE NÄR DEN SKICKADES SOM ETT STATE.
export interface BuyBtnProps {
  productID: string,
  inStock: number
}

// TAR EMOT PARAMETER ID FRÅN PRODUCTCARD OCH GER DEN INTERFACE BUYBTNPROPS
//SEN GÖR VI INTE MER ÄN KÖR FUNKTIONEN PÅ EN ON CLICK. VI SKICKAR MED ID PROPERTYN
export function BuyBtn( {productID, inStock}: BuyBtnProps) {
  const {addToCart} = useContext(CartContext)
  
  return (         
    <Button style={{cursor: "default"}}  disabled={inStock < 1} onClick={() => addToCart(productID)} icon = {<ShoppingCartOutlined />}>Köp</Button>
    )
}


