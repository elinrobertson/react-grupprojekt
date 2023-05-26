import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { ConfigProvider } from "antd"

function App() {
  return (
  <ConfigProvider theme={{token:{colorPrimary: "#809F8A"}}}>
  <Header />
  <Main />
  <Footer />

  </ConfigProvider>
  )
}



export default App
