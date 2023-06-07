import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { Product } from "../components/ProductList/ProductList";
import Cookies from "js-cookie";

//NYTT INTERFACE SOM LÄGGER TILL EN PROPERTY PÅ INTERFACE PRODUCT
interface CartItem extends Product {
  quantity: number;
}
// Interface som bestämmer hur "Cart" ska se ut
export interface Cart {
cart: CartItem[],
totalPrice: number,
totalQuantity: number
}

// Interface som bestämmer hur "CartContext" ska se ut
interface CartContext {
    currentCart: Cart,
    setCurrentCart: (value: Cart) => void,
    addToCart: (id: string) => void,
    removeFromCart: () => void
}

// skapar contextet utifrån interfacet "Cartcontext" och sparar det i en variabel (CartContext)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CartContext = createContext<CartContext>(null as any)

// En function
function CartProvider({children}:PropsWithChildren) {
  // DETTA SÄTTER VALUES PÅ CART PROPERTIES SOM BLIR DEFAULT VÄRDE PÅ CURRENTCART
  const [currentCart, setCurrentCart] = useState<Cart>({
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
  })


  async function addToCart(id: string) { 
    try {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json()
      
      // DENNA SKAPAR EN NY VARIABLE SOM ÄR EN KOPIA PÅ CURRENTCART
      const updatedCart = { ...currentCart };
      //DENNA SÖKER IGENOM CART FÖR ATT SE OM EN PRODUKT FINNS
      const productIndex = updatedCart.cart.findIndex((item) => item._id === id);

      if (productIndex !== -1) {
        // OM PRODUKTEN FINNS SÅ UPPDATERAR DEN QUANTITY
        updatedCart.cart[productIndex].quantity += 1;
      } else {
        // OM INTE SÅ LÄGGER DEN TILL PRODUKTEN I EN NY VARIABLE SOM SEN
        // PUSHAS TILL CART-PROPERTYN I UPDATEDCART
        const newProduct: CartItem = { ...data, quantity: 1 };
        updatedCart.cart.push(newProduct);
      }
      //DESSA PLUSSAR BARA IHOP DEFAULT VÄRDENA FÖR TOTALPRICE OCH QUANTITY
      updatedCart.totalPrice += data.price;
      updatedCart.totalQuantity += 1;

      //SÄTTER OM STATE CURRENTCART
      setCurrentCart(updatedCart);
      Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 })

    } catch (error) {
      console.log("Error:", error);
    }
  }

    // Tittar om cookie finns
    useEffect(() => {
      const parseCookieValue = Cookies.get('cart');
      if (parseCookieValue) {
        const cookieObject = JSON.parse(parseCookieValue);
        setCurrentCart(cookieObject)
      }
    }, []);

async function removeFromCart() { 
    console.log("removed from cart");
}

   return (
     <CartContext.Provider value={{currentCart, setCurrentCart, addToCart, removeFromCart}}>
         {children}
    </CartContext.Provider>
  )
}

export default CartProvider


