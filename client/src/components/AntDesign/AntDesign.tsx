import { Button, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./AntDesign.css"

export function AntDesignButton() {
  const addToCart = (e) => {
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


