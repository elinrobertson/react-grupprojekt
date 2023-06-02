import "./HeaderLogin.css";
import { UserOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    isAdmin: boolean
}

function HeaderLogin() {

  const [isLoggedIn, setIsLoggedIn] = useState<User | null>(null);

  useEffect(() => {
    const auth = async () => {
      try {
        const res = await fetch("/api/users/authorize");
        const data = await res.json();
  
        setIsLoggedIn(data);

        //return <img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" />

      } catch (error) {
        console.log(error);
      }
    };
    auth();
  }, []);

  const renderBtn = () => {
    if (!isLoggedIn) return <Button type="primary">Logga in</Button>
  };

  const renderContent = () => {
    console.log(isLoggedIn?.isAdmin)
    if (isLoggedIn?.isAdmin) {
      return <NavLink to={"/admin"}><img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" /></NavLink>
    } else {
      return <NavLink to={"/"}><p>{isLoggedIn?.firstName} + Sara</p><UserOutlined /></NavLink>
    }
  };

  return (
    <div>
        {renderContent()}
        {renderBtn()}
    </div>
  )
}

export default HeaderLogin;
