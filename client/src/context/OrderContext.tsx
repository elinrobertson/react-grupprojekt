import React, { PropsWithChildren, createContext, useState, useEffect, useContext } from "react";
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
  key: string,
  _id: string,
  orderNumber: number,
  orderItems: OrderItem[],
  deliveryAddress: AddressItem,
  shippingMethod: string,
  shipped: boolean | string
}

// export interface OrderNumber {
// orderNumber: number
// }

interface OrderContext {
  order: Order,
  setOrder: (value: Order) => void,
  setOrders: (value: Order[]) => void,
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
  orders: Order[],
  editOrder: (value: React.Key) => void
}
export const OrderContext = createContext<OrderContext>(null as any)

// ---------------------------------------------------------- ORDER CONTEXT PROVIDER STARTS HERE

function OrderProvider({ children }: PropsWithChildren) {

  const { currentCart } = useContext(CartContext)

  // ------------------------------------------------------- STATES STARTS HERE

  // Ett state som berättar att checkbox från Cart är i kryssad.
  const [AddressCheckbox, setAddressCheckbox] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
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
    key: "",
    _id: "",
    orderNumber: 0,
    orderItems: orderItem,
    deliveryAddress: address,
    shippingMethod: "",
    shipped: false
  })

  const [orderNumber, setOrderNumber] = useState(0);

  // ------------------------------------------------------- ALL STATES ENDS HERE

  const getOrderList = async () => {
    try {
      const res = await fetch(
        "/api/orders"
      );
      const productData = await res.json()
      setOrders(productData);
      console.log(orders);
   
    } catch (error) {
      console.log(error);
    }
 
  }
 
  useEffect(() => {
    getOrderList();
  },[]);


  const saveAddress = (value: object) => {
    setAddress({
      ...address,
      ...value
    })
  }

  const setCheckboxValue = (value: boolean) => {
    setAddressCheckbox(value)
  }

  const getShipping = async () => {
    const res = await fetch('/api/shippingMethod');
    const data = await res.json();
    saveShippingMethod(data)
  }

  const editOrder = async (selectedRowKeys: React.Key) => {
    
    try {
      // Fetch the initial product value
      const rest = await fetch(`/api/orders/${selectedRowKeys}`);
      const current = await rest.json();
      const updatedOrder = { ...current, shipped: true };

      const res = await fetch(`/api/orders/${selectedRowKeys}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      });

      if (res.ok) { 
        getOrderList()
       }

    } catch (error) {
      console.log("There was an error:", error);
    }
  }

  useEffect(() => {
    getShipping()
  }, [])

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
    setOrder((prevOrder) => ({
      ...prevOrder,
      orderItems: orderItem,
      deliveryAddress: address
    }));
  }, [address, orderItem]);

  return (
    <OrderContext.Provider value={{ 
      address, 
      setAddress, 
      order, 
      setOrder, 
      saveAddress, 
      shippingMethod, 
      AddressCheckbox, 
      setCheckboxValue, 
      saveShippingMethod, 
      shippingMethodes, 
      setOrderNumber, 
      orderNumber, 
      orders, 
      setOrders, 
      editOrder }}>
        
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;


