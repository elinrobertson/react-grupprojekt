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
  useEffect(() => {
    // Perform authorization check on component mount
    auth();
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState<User | null>(null);

  const auth = async () => {
    try {
      const res = await fetch("/api/users/authorize");
      const data = await res.json();

      setIsLoggedIn(data);
      console.log(isLoggedIn?.firstName);
      
      /* if (data.admin) {
        return <img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" />
    } else if (!data.admin) {
       return 

    }
 */
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) return <Button type="primary">Logga in</Button>

    if (isLoggedIn.isAdmin) {
      return <NavLink to={"/admin"}><img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" /></NavLink>
    } else {
      return <NavLink to={"/"}><p>{isLoggedIn?.firstName} + Sara</p><UserOutlined /></NavLink>
    }
  };

  return (
    <div>
        {renderContent()}
    </div>
  )
}

export default HeaderLogin;
