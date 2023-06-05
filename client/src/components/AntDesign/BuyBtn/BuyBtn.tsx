import { Button, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./BuyBtn.css"

export function BuyBtn() {
  const addToCart = (e: object) => {
    console.log(e)
  }
  
  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    <>
    <Space wrap>
    <Button icon = {<ShoppingCartOutlined />} onClick={ (e) => { addToCart(e); } }>Köp</Button>
    </Space>
    </>
    )
}


