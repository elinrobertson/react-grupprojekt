import "./HeaderLogin.css";
import { UserOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom"
interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    isAdmin: boolean
}

function HeaderLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState<User | null>(null);
  
  
  useEffect(() => {
    const auth = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("/api/users/authorize");
        if (res.ok) {
        const data = await res.json();
        setIsLoggedIn(data);
        setIsLoading(false)
        }

      } catch (error) {
        console.log(error);
      }
    };
    auth();
  }, []);

const checkIsLoading = () => {
 return !isLoading ? renderContent() : true;
}

const renderContent = () => {
  
  if (isLoggedIn?.isAdmin) {
    return <NavLink to={"/login"}><p>Admin</p> <img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" /></NavLink>
  } else {
    return <NavLink to={"/login"}><p>User</p><UserOutlined /></NavLink>
  }
};


  return (
    <div className="loggedinIcons-div">
       {checkIsLoading()}
       { isLoading ? <Link to={"/login"}><Button type="primary">Logga in</Button></Link> : null}
    </div>
  )
}

export default HeaderLogin;