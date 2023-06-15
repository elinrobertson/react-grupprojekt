import "./ProductDetail.css";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BuyBtn } from "../AntDesign/BuyBtn/BuyBtn";
import { Product } from "../../context/ProductContext";
import { Button } from "antd";
import InStock from "../InStock/InStock"


function ProductDetail() {
  const [product, setProductDetail] = useState<Product | undefined>();
  const { id } = useParams();

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/${id}`
        );
        const data = await res.json()

        setProductDetail(data);

      } catch (error) {
        console.log(error);
      }
    }
    getProductDetail();

  }, []);

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
            <InStock product={product} />
            <div className="AntDesignButton-div">
              <BuyBtn inStock={product.inStock} productID={product._id} />
              <Link to={"/"}><Button style={{ marginLeft: "1em" }}>Tillbaka</Button></Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductDetail



