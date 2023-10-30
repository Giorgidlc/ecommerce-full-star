import '../styles/css/productsCards.css'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
import HeaderCards from '../components/HeaderCards'
import FooterCards from '../components/FooterCards'



const CardsProducts = () => {
  const data = useLoaderData();
  const categoryName = data.categoryName

  return (  
    <div className="layout-cards">
      <header className="headerButtons">
          <HeaderCards categoryName={categoryName} />
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
        <FooterCards />
      </footer>
    </div>
  );
};

export default CardsProducts;

