import { PropsWithChildren, createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { CartContext } from "./CartContext";

// INTERFACES
interface AddressItem {
    street: string,
    zipcode: string,
    city: string,
    country: string,
}

interface OrderItem {
  product:string,
  quantity: number,
  price: number,
  }

export interface Order {
  orderNumber: number,
  customer: string,
  orderItems: OrderItem[],
  deliveryAddress: AddressItem,
  shipped: boolean,
  shippingMethod: string
}

interface OrderContext {
  order: Order,
  setOrder: (value: Order) => void,
  address: AddressItem,
  setAddress: (value: AddressItem) => void,
  saveAddress: (value: Partial<AddressItem>) => void,
  // saveOrder: (value: OrderItem) => void,
  shippingMethod: (value: string) => void,
  AddressCheckbox: boolean
  setCheckboxValue: (value: boolean) => void
}
export const OrderContext = createContext<OrderContext>(null as any)

// ---------------------------------------------------------- ORDER CONTEXT PROVIDER STARTS HERE

function OrderProvider({ children }: PropsWithChildren) {

  const {loggedinUser} = useContext(UserContext)
  const {currentCart} = useContext(CartContext)

  // ------------------------------------------------------- STATES STARTS HERE
  
  // Ett state som berättar att checkbox från Cart är i kryssad.
  const [AddressCheckbox, setAddressCheckbox] = useState(false)

  const [orderItem, setOrderItem] = useState<OrderItem[]>([{
    product: "",
    quantity: 0,
    price: 0,
  }])

  const [address, setAddress] = useState<AddressItem>({
    street: "",
    zipcode: "",
    city: "",
    country: "",
  })

  const [order, setOrder] = useState<Order>({
    orderNumber: 0,
    customer: "",
    orderItems: orderItem,
    deliveryAddress: address,
    shipped: false,
    shippingMethod: ""
})

// ------------------------------------------------------- ALL STATES ENDS HERE
const getOrders = async () => {
  const res = await fetch('/api/orders');
  const data = await res.json();
  //console.log("Get Orders: ", data);
  const countedOrders =  4 * Math.floor(Math.random() * 1000000)
  setOrder({...order, orderNumber: countedOrders})
}

const saveAddress = (value: object) => {
  setAddress({
    ...address,
    ...value
  })
}

const setCheckboxValue = (value: boolean) => {
  setAddressCheckbox(value)
}

const shippingMethod = (value: string) => {
  setOrder({
    ...order,
    shippingMethod: value
  })
}



useEffect(() => {
  const orders = currentCart.cart.map((product) => ({
    product: product._id,
    quantity: product.quantity,
    price: product.price
  }));

  setOrderItem(orders);
}, [currentCart]);

useEffect(() => {
  console.log("Order status: ", order);
}, [order]);

useEffect(() => {
  setOrder((prevOrder) => ({
    ...prevOrder,
    orderNumber: 5436,
    customer: loggedinUser ? loggedinUser._id : "",
    orderItems: orderItem,
    deliveryAddress: address
  }));
}, [address, orderItem]);

  return (
    <OrderContext.Provider value={{address, setAddress, order, setOrder, saveAddress, shippingMethod, AddressCheckbox, setCheckboxValue}}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;


