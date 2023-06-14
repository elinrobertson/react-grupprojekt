import { PropsWithChildren, createContext, useState, useEffect } from "react";


export interface Product {
    key: any;
    _id: string,
    title: string, 
    price: number, 
    description: string, 
    image: string,
    inStock: number,
  }

  interface ProductContext {
    getProductList: () => void,
    addProduct:(value: Product) => void,
    deleteProduct: (productId: string) => void,
    editProduct:(value: Product) => void,
    products: Product[]
  }

  export const ProductContext = createContext<ProductContext>(null as any)

  export function ProductProvider({ children }: PropsWithChildren) {
    const[products, setProducts]= useState<Product[]>([]);

    const getProductList = async () => {
        try {
          const res = await fetch(
            "http://localhost:3000/api/products"
          );
          const productData = await res.json()
          // console.log("loggar ut productData", productData);
          setProducts(productData);
          //console.log("loggar ut products", products);
  
        } catch (error) {
          console.log(error);
        }
      }
  
    useEffect(() => {

      getProductList();
    },[]);
    

    function addProduct() {
        console.log("add products");
    }

    function deleteProduct(product: string) {
      
      console.log(product);
    }

    function editProduct() {
        console.log("edit product");
    }

    return (
    <ProductContext.Provider value={{ getProductList, addProduct, deleteProduct, editProduct, products  }}>
    {children}
  </ProductContext.Provider>);
  }


//GET PRODUCTS

//CREATE PRODUCT (ADD PRODUCT)

//UPDATE PRODUCT

//DELETE PRODUCT

//GET ORDERS AND MARK ORDER AS SHIPPED (IN ORDERCONTEXT)

