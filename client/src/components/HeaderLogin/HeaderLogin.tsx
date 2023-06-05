import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { UserOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import "./HeaderLogin.css";

function HeaderLogin() {

  const { loggedinUser } = useContext(UserContext)

  return (
    <div className="loggedInUser-div">
        {loggedinUser ?
        <div className="userDropdown-div">
          <p>{loggedinUser?.firstName}</p>
          <UserOutlined  style={{fontSize: '24px'}} />
        </div> : 
        <Link to={"/login"}>
          <Button type="primary">Logga in</Button>
        </Link>}
    </div>
  )
}

export default HeaderLogin;
