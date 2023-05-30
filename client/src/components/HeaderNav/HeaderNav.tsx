import "./HeaderNav.css"
import 'antd/dist/reset.css';
import { NavLink } from "react-router-dom"
import { Menu } from "antd";


const menuItems = [{
    label: "Nyheter",
    key: "news",

},
{   
     label: (<NavLink to={"/"}>Produkter </NavLink>),
key: "products",
},
{   
    label: "Kontakt",
key: "contact",
},
{   
    label: "Om oss",
key: "about",
},
]

const HeaderNav = () => {
  return (

<Menu className="headerNav"  mode="horizontal" items={menuItems}></Menu>

    // <div className="headerNav">
    //     <ul>
    //     <li><NavLink to="/">Produkter</NavLink></li>
    //     <li><NavLink to="/about">Om oss</NavLink></li>
    //    <li><NavLink to="/contact">Contakt</NavLink></li>
    //     <li><NavLink to="/blalalal">Blalala</NavLink></li>
    //     </ul>
    // </div>
  )
}

export default HeaderNav
