import { Button, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./AntDesign.css"

export function AntDesignButton() {
  return (
    <>
    <Space wrap>
    <Button icon = {<ShoppingCartOutlined />}>Köp</Button>
    </Space>
    </>
    )
}


