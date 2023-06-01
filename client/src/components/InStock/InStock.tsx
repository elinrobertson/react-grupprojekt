import React from 'react';
import { Product } from "../ProductList/ProductList";

interface InStockProps {
  product: number;
}


//const[ product, setInStock]= useState<Product|undefined>();

const InStock: React.FC<InStockProps> = ({ product }) => {
  let stockMessage: string;

  if (product.inStock === 0) {
    stockMessage = 'Ej i lager';
  } else if (productCount < 5) {
    stockMessage = 'Fåtal i lager';
  } else {
    stockMessage = 'I lager';
  }

  return <div>{stockMessage}</div>;
};


export default InStock;