import { PropsWithChildren, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";



//NYTT INTERFACE SOM LÄGGER TILL EN PROPERTY PÅ INTERFACE PRODUCT
interface AdressItem {
    street: string,
    zipcode: string,
    city: string,
    country: string
}
interface OrderItem {
    _id: string;
  }
// Interface som bestämmer hur "Cart" ska se ut
export interface Order {
  orderNumber: number,
  customer: string,
  orderItems: OrderItem[],
  deliveryAddress: AdressItem[],
  shipped: boolean,
  shippingMethod: string
}

// Interface som bestämmer hur "CartContext" ska se ut
interface OrderContext {
  order: Order,
  setOrder: (value: Order) => void,
}

// skapar contextet utifrån interfacet "Cartcontext" och sparar det i en variabel (CartContext)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const OrderContext = createContext<OrderContext>(null as any)

// En function
function OrderProvider({ children }: PropsWithChildren) {
  // DETTA SÄTTER VALUES PÅ CART PROPERTIES SOM BLIR DEFAULT VÄRDE PÅ CURRENTCART
  const [order, setOrder] = useState<Order>({
    orderNumber: 0,
    customer: "",
    orderItems: [],
    deliveryAddress: [],
    shipped: false,
    shippingMethod: ""
})


 

  // Tittar om cookie finns
  useEffect(() => {
    const parseCookieValue = Cookies.get('cart');
    if (parseCookieValue) {
      const cookieObject = JSON.parse(parseCookieValue);
      setOrder(cookieObject)
    }
  }, []);

  return (
    <OrderContext.Provider value={{ order, setOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;


