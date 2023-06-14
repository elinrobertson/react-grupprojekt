import { PropsWithChildren, createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

// INTERFACES
interface AddressItem {
  street: string,
  zipcode: string,
  city: string,
  country: string,
}

interface OrderItem {
  product: string,
  quantity: number,
  price: number,
}

interface ShippingMethod {
  _id: string,
  company: string,
  price: number,
  deliveryTimeInHours: number
}

export interface Order {
  orderItems: OrderItem[],
  deliveryAddress: AddressItem,
  shippingMethod: string
}

// export interface OrderNumber {
// orderNumber: number
// }

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
  saveShippingMethod: (methods: ShippingMethod[]) => void
  shippingMethodes: ShippingMethod[]
  setOrderNumber: (value: number) => void
  orderNumber: number
}
export const OrderContext = createContext<OrderContext>(null as any)

// ---------------------------------------------------------- ORDER CONTEXT PROVIDER STARTS HERE

function OrderProvider({ children }: PropsWithChildren) {

  const { currentCart } = useContext(CartContext)

  // ------------------------------------------------------- STATES STARTS HERE

  // Ett state som berättar att checkbox från Cart är i kryssad.
  const [AddressCheckbox, setAddressCheckbox] = useState(false)

  const [shippingMethodes, setShippingMethods] = useState<ShippingMethod[]>([]);

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
    orderItems: orderItem,
    deliveryAddress: address,
    shippingMethod: ""
  })

  const [orderNumber, setOrderNumber] = useState(0);

  // ------------------------------------------------------- ALL STATES ENDS HERE
  /* const getOrders = async () => {
    const res = await fetch('/api/orders');
    const data = await res.json();
    console.log("Get Orders: ", data);
  } */

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

  const saveShippingMethod = (methods: ShippingMethod[]) => {
    const sorted: ShippingMethod[] = methods.sort((a: ShippingMethod, b: ShippingMethod) => a.deliveryTimeInHours - b.deliveryTimeInHours);
    setShippingMethods(sorted)
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
      orderItems: orderItem,
      deliveryAddress: address
    }));
  }, [address, orderItem]);

  return (
    <OrderContext.Provider value={{ address, setAddress, order, setOrder, saveAddress, shippingMethod, AddressCheckbox, setCheckboxValue, saveShippingMethod, shippingMethodes, setOrderNumber, orderNumber }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;


