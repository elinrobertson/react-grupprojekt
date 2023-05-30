import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react"; 
import { NavLink } from "react-router-dom";

export interface Product {
  _id: string,
  title: string, 
  price: number, 
  description: string, 
  image: string,
  inStock: string,
}


function ProductList() {
  const[products, setProducts]= useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
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
    getProducts();
  },[]);
  

  return (
    <div className="productList-div">
      {products.map((product) => (
        <NavLink key={product._id} to={"/" + product._id}> 
          <ProductCard products={product} />
        </NavLink>
      ))}
    </div>
  );
  
}

export default ProductList;
