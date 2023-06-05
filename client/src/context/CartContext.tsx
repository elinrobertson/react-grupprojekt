import { PropsWithChildren, createContext, useState, useEffect } from "react";

// Interface som bestämmer hur "Cart" ska se ut
export interface Cart {
cart: [],
totalPrice: number,
totalQuantity: number
}

// Interface som bestämmer hur "CartContext" ska se ut
interface CartContext {
    currentCart: Cart[],
    addToCart: (id: string) => void,
    removeFromCart: () => void
}

// skapar contextet utifrån interfacet "Cartcontext" och sparar det i en variabel (CartContext)
export const CartContext = createContext<CartContext>(null as any)

// En function
function CartProvider({children}:PropsWithChildren) {
    const [currentCart, setCurrentCart] = useState([])

async function addToCart(id: string) { 
    try {
        console.log(id);
        
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json()
        console.log(data)
        
        
      } catch (error) {
        console.log("Error:", error);
      }
}

async function removeFromCart() { 

    console.log("removed from cart");
    
    // try {
    //  await fetch(`/api/products/${id}`) 
    //  {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(loggedinUser)
    //   });
    //     setLoggedinUser(null)
    //   } catch (error) {
    //     console.log("Error:", error);
    //   }
}

// useEffect(() => {
//     const auth = async () => {
//       try {
//         const res = await fetch("/api/users/authorize");
//         const data = await res.json();
//         if (res.ok) {
//         setLoggedinUser(data);
//         }
//         //return <img className="header-adminIcon" src="../src/assets/devUser.svg" alt="user admin" />

//       } catch (error) {
//         console.log(error);
//       }
//     };
//     auth();
//   }, []);

   return (
     <CartContext.Provider value={{currentCart, addToCart, removeFromCart}}>
         {children}
    </CartContext.Provider>
  )
}

export default CartProvider


