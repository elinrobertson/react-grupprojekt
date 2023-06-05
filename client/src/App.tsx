import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { ConfigProvider } from "antd"
import UserProvider from "./context/UserContext"

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#809F8A" } }}>
      <UserProvider>
        <Header />
        <Main />
        <Footer />
      </UserProvider>
    </ConfigProvider>
  )
}



export default App
