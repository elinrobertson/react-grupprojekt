import { CartContext } from '../../../context/CartContext';
//import {useContext} from "react"
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./BuyBtn.css"


export function BuyBtn() {

  // const {addToCart} = useContext(CartContext)

  
  return (         

    <Button icon = {<ShoppingCartOutlined />}>Köp</Button>
    
    )
}


