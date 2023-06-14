import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { ConfigProvider } from "antd"
import UserProvider from "./context/UserContext"
import CartProvider from "./context/CartContext"
import { ProductProvider } from "./context/ProductContext"
import OrderProvider from "./context/OrderContext"


function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#809F8A" } }}>
      <UserProvider>
        <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <Header />
            <Main />
            <Footer />
          </OrderProvider>
        </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ConfigProvider>
  )
}



export default App
