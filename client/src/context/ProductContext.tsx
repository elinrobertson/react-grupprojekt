import { PropsWithChildren, createContext, useState, useEffect } from "react";

export interface Product {
  _id: string,
  title: string,
  price: number,
  description: string,
  image: string,
  inStock: number,
}

interface ProductContext {
  getProductList: () => void,
  addProduct: (value: Partial<Product>) => void,
  deleteProduct: (productId: string) => void,
  editProduct: (id: string, product: Product) => void,
  products: Product[]
}

export const ProductContext = createContext<ProductContext>(null as any)

export function ProductProvider({ children }: PropsWithChildren) {

  const [products, setProducts] = useState<Product[]>([]);

  // ----------------------------------------------------- FUNCTION THAT GETS PRODUCTS 
  const getProductList = async () => {
    try {
      const res = await fetch(
        "/api/products"
      );
      const productData = await res.json()
      setProducts(productData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  // ----------------------------------------------------- FUNCTION THAT ADDS PRODUCTS 
  const addProduct = async (value: Partial<Product>) => {
    try {
      const res = await fetch(`/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (res.ok) {
        getProductList();
      }

    } catch (error) {
      console.log(error);
    }
  }

  // ----------------------------------------------------- FUNCTION THAT DELETES PRODUCTS 

  const deleteProduct = async (id: string) => {
    try {
      const res = await fetch(`api/products/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ----------------------------------------------------- FUNCTION THAT EDITS PRODUCTS 

  const editProduct = async (id: string, product: Partial<Product>) => {
    try {
      // Fetch the initial product value
      const rest = await fetch(`/api/products/${id}`);
      const current = await rest.json();
      const updatedProduct = { ...current, ...product };

      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (res.ok) { getProductList() }

    } catch (error) {
      console.log("There was an error:", error);
    }
  }

  return (
    <ProductContext.Provider value={{ getProductList, addProduct, deleteProduct, editProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
}