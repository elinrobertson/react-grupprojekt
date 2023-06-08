import { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import "./BurgerMenu.css"
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <>
      <Space className='space'>
        <Button type="primary" onClick={showDrawer}>
        <MenuOutlined />
        </Button>
      </Space>
      <Drawer
        title= {<ArrowLeftOutlined onClick={onClose} />}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <NavLink onClick={onClose} to={"/"}><p>Produkter</p></NavLink>
        <NavLink to={"#"}> <p>Om oss</p></NavLink>
        <NavLink to={"#"}> <p>Kontakt</p></NavLink>
      </Drawer>
    </>
  );
};

export default BurgerMenu;