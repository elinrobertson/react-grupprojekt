import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { ConfigProvider } from "antd"
import UserProvider from "./context/UserContext"
import CartProvider from "./context/CartContext"
import { ProductProvider } from "./context/ProductContext"

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#809F8A" } }}>
      <UserProvider>
        <ProductProvider>
        <CartProvider>
        <Header />
        <Main />
        <Footer />
        </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ConfigProvider>
  )
}



export default App
