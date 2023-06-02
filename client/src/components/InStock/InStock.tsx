import { Product } from "../ProductList/ProductList";

interface InStockProps {
  product: Product;
}


// //const[ product, setInStock]= useState<Product|undefined>();


// function InStock({ product }: InStockProps) {

//   let stockMessage: string;
//     console.log(product.inStock);


//   if (product.inStock === 0) {
//     stockMessage = 'Ej i lager';
//   } else if (product.inStock <5) {
//     stockMessage = 'Fåtal i lager';
//   } else {
//     stockMessage = 'I lager';
//   }

//   return (<div>{stockMessage}</div>);
// }


// export default InStock;


// interface InStockProps {
//   product: {
//     inStock: number;
//   };
// }

const InStock = ({ product }: InStockProps) => {
  const getStockMessage = () => {
    let stockMessage: string;

    if (product.inStock === 0) {
      stockMessage = 'Ej i lager';
    } else if (product.inStock < 5) {
      stockMessage = 'Fåtal i lager';
    } else {
      stockMessage = 'I lager';
    }

    return stockMessage;
  };

  const getStockMessageColor = () => {
    if (product.inStock === 0) {
      return 'rgb(219, 107, 95)';
    } else if (product.inStock < 5) {
      return 'rgb(223, 160, 77)';
    } else {
      return '#809F8A';
    }
  };

  const stockMessageStyle = {
    color: getStockMessageColor(),
    fontSize: '14px'
  };

  return <div style={stockMessageStyle}>{getStockMessage()}</div>;
};

export default InStock;


