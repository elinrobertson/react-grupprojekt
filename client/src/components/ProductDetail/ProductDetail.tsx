import "./ProductDetail.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AntDesignButton } from "../AntDesign/AntDesign";
import { Product } from "../ProductList/ProductList";


 function ProductDetail() {
 const [product, setProduct] = useState(null)
 const {_id} = useParams()
 
 useEffect(() => {
      fetch("http://localhost:3000/api/products/:id")}
)}

export default ProductDetail