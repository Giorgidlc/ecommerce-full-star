import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
//import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/css/productsCards.css'


const CardsProducts = () => {
  const data = useLoaderData();

  return (
    <div className="layout-cards">
      <header className="header">
        {/* <Header category={ categoryName }/> */}
      </header>
      <section className="cardsProducts">
        {data.products.length > 0 ? (
          data.products.map((product) => (
            <Card key={product.id} product={product} />
          )) 
        ) : (
          <h2>Card not found</h2>
        )}
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default CardsProducts;

