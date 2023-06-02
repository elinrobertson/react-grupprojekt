import { Product } from "../ProductList/ProductList";

interface InStockProps {
  product: Product;
}


//const[ product, setInStock]= useState<Product|undefined>();


function InStock({ product }: InStockProps) {

  let stockMessage: string;
    console.log(product.inStock);


  if (product.inStock === 0) {
    stockMessage = 'Ej i lager';
  } else if (product.inStock <5) {
    stockMessage = 'Fåtal i lager';
  } else {
    stockMessage = 'I lager';
  }

  return (<div>{stockMessage}</div>);
}


export default InStock;