import "./ProductDetail.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BuyBtn } from "../AntDesign/BuyBtn/BuyBtn";
import { Product } from "../ProductList/ProductList";
import InStock from "../InStock/InStock"


function ProductDetail(){
  const[ product, setProductDetail]= useState<Product|undefined>();
  const {id} = useParams();

  useEffect(() => {
  const getProductDetail = async () => {
    try {
      const res = await fetch(
    `http://localhost:3000/api/products/${id}`
      );
      const data = await res.json()
      // console.log("loggar ut productData", productData);
      setProductDetail(data); 
      //console.log("loggar ut products", products);

    } catch (error) {
      console.log(error);
    }
  }
  getProductDetail();

},[]);


return (
  <div className="productDetail-content">
    
    {product && (
      <div className="productDetail-wrapper">
        <div className="image-div">
        <img src={product.image} alt={product.title} />
        </div>
        <div className="productDetail-info">
          <h2>{product.title}</h2>
          <h3>{product.price} kr</h3>
          <p className="description">{product.description}</p>
          <InStock product = {product} />
          <div className="AntDesignButton-div">
          <BuyBtn productID={ product._id } /> 
          </div>
        </div>
      </div>
    )}
    
  </div>
);
}

export default ProductDetail



