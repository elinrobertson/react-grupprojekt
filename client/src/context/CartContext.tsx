import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { Product } from "../components/ProductList/ProductList";
import Cookies from "js-cookie";



//NYTT INTERFACE SOM LÄGGER TILL EN PROPERTY PÅ INTERFACE PRODUCT
export interface CartItem extends Product {
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
  removeFromCart: (productId: string) => void,
  decreaseQuantity: (productId: string) => void
}

// skapar contextet utifrån interfacet "Cartcontext" och sparar det i en variabel (CartContext)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CartContext = createContext<CartContext>(null as any)

// En function
function CartProvider({ children }: PropsWithChildren) {
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

  async function decreaseQuantity(id: string) {

        const updatedCart = { ...currentCart };

        const productIndex = updatedCart.cart.findIndex((item) => item._id === id);
    
        if (productIndex !== -1 && updatedCart.cart[productIndex].quantity !== 1) {
          updatedCart.cart[productIndex].quantity -= 1;
          updatedCart.totalPrice -= updatedCart.cart[productIndex].price;
          updatedCart.totalQuantity -= 1;
        } else {
          console.log("det finns bara en kvar, tryck på trashcan istället om du vill ta bort produkten!!!!!");
    
        }
        console.log(updatedCart);
        
        //SÄTTER OM STATE CURRENTCART
        Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 })
        setCurrentCart(updatedCart);
       
  }

function removeFromCart(id: string) {
  // DENNA SKAPAR EN NY VARIABLE SOM ÄR EN KOPIA PÅ CURRENTCART
  const updatedCart = { ...currentCart };
  //DENNA SÖKER IGENOM CART FÖR ATT SE OM EN PRODUKT FINNS
  const productIndex = updatedCart.cart.findIndex((item) => item._id === id);
  updatedCart.totalPrice -= updatedCart.cart[productIndex].price * updatedCart.cart[productIndex].quantity;
  updatedCart.totalQuantity -= updatedCart.cart[productIndex].quantity;
  updatedCart.cart.splice(productIndex, 1)

/*   const product: CartItem | undefined = updatedCart.cart.find((item) => item._id === id);
  
  if (product) {
    updatedCart.cart.splice(productIndex, 1);
    updatedCart.totalPrice += product.price;
    updatedCart.totalQuantity -= product.quantity;
  } else {
    console.log("Produkten finns inte i varukorgen.");
  } */
  
  Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
  setCurrentCart(updatedCart);
  
  console.log(updatedCart);
}

  

  return (
    <CartContext.Provider value={{ currentCart, setCurrentCart, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider


