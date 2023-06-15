
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserContext } from "../../../context/UserContext"
import { useContext } from "react"
import HeaderLogin from '../../HeaderLogin/HeaderLogin';
import "./UserDropdown.css"


const UserDropdown = () => {

  const {logOut, loggedinUser} = useContext(UserContext)
  const isAdmin = loggedinUser?.isAdmin // Funktion för att kontrollera om användaren är admin

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <NavLink to="#">
          Min sida
        </NavLink>
      ),
    },
    isAdmin ? (
      {
        key: '2',
        label: (
          <NavLink to="/admin">
            Admin
          </NavLink>
        ),
      }
    ) : null, 
    isAdmin ? (
      {
        key: '3',
        label: (
          <NavLink to="/orders">
            Ordrar
          </NavLink>
        ),
      }
    ) : null, 
    {
      key: '4',
      label: (
        <NavLink to="/" onClick={() => logOut()}>
          Logga ut
        </NavLink>
      ),
    }
  ]; 


  
  return (
    loggedinUser ?
    <Dropdown menu= {{items}}>
      <Space>
        <HeaderLogin />
      </Space>
    </Dropdown> :
     <HeaderLogin />
  )
}

export default UserDropdown