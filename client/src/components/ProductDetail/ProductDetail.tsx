import "./ProductDetail.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { AntDesignButton } from "../AntDesign/AntDesign";
import { Product } from "../ProductList/ProductList";

// interface ProductDetailProps {
//   productdetail: Product;

//   title:string,

// }
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
  <div>
    
    {product && (
      <div>
        <img src={product.image} alt={product.title} />
        <div className="productCard-info">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
            
        </div>
      </div>
    )}
    
  </div>
);
}


export default ProductDetail

// interface ProductDetailProps {
//   products: Product;
// }
// function ProductDetail({ products }: ProductDetailProps){
//   const[ product, setProductDetail]= useState<Product[]>([]);
// useEffect(() => {
//   const getProductDetail = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:3000/api/products/:id"
//       );
//       const data = await res.json()
//       // console.log("loggar ut productData", productData);
//       setProductDetail(data); 
//       //console.log("loggar ut products", products);

//     } catch shadireruo(error) {
//       console.log(error);
//     }
//   }
//   getProductDetail();
// },[]);

// return (

//   <div>
//     <div>
//     <img src={products.image} alt={products.title} />
//         <div className="productCard-info">
//           <h3>{products.title}</h3>
//         </div>
//     </div>
//   </div>

// );
// }

