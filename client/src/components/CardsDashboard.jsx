import { useState, useEffect } from 'react';
import ProductsDetails from "./ProductsDetails";
import ProductImage from "./ProductImage";
import DashboardButtons from "./DashboardButtons"

const CardsDashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => { fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error", error));
}, []);

return (
    <section id="cards">
      {products.map((prod) => (
        <section key={prod.id} className="cardWraper">
        <ProductImage image={prod.image} textImg={"Photography of " + prod.title}/>
        <article className="details">
          <ProductsDetails title={prod.title} price={prod.price} description={prod.description} />
          <DashboardButtons prodId={prod.id} />
        </article>
      </section>

        ))}
      </section>
    );
  }


export default CardsDashboard