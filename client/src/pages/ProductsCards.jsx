import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/css/productsCards.css'


const CardsProducts = () => {
  const product = useLoaderData();

  return (
    <main className="layout-cards">
      <section className="header">
        <Header product={ product }/>
      </section>
      <section className="cardsProducts">
        <Card />
        <Card />
        <Card />
        <Card />
      </section> 
      <section className="footer">
       <Footer />
      </section>
  </main>
  )
}

export default CardsProducts

