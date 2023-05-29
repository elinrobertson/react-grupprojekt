import "./ProductCard.css";

interface Product {
  id: string,
  title: string, 
  price: number, 
  description: string, 
  image: string,
  inStock: string,
}

interface ProductCardProps {
  products: Product;
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div key={products.id} className="productCard-div">
      <img src={products.image} alt={products.title} />
      <h1>{products.title}</h1>
      <p>{products.price}</p>
      <p>{products.description}</p>
    </div>
  );
}

export default ProductCard;



/* interface Product {
  id: string,
  title: string, 
  price: number, 
  description: string, 
  image: string,
  inStock: string,
}

function ProductCard({products}) {
  return (
    <div key={products.id} className="productCard-div">
          {<img src={products.image}></img>}
          {<h1>{products.title}</h1>}
          {<p>{products.price}</p>}
          {<p>{products.description}</p>}

    </div>
  );
}
*/