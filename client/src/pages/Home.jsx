import '../styles/css/home.css'
import { useLoaderData, /* Outlet */ } from 'react-router-dom'
import { Footer } from '../components/Footer.jsx'
import ProductsMainScreen from '../components/ProductsMainScreen';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <main className="layout">
      {data.products.length > 0 ? (
          data.products.map((product) => (
            <ProductsMainScreen key={product.id} product={product} />
          )) 
        ) : (
          <h2>Card not found</h2>
        )} 
      <section className="footer">
          <Footer />
      </section>
  </main>
  )
}

export default Home;