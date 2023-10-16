import Card from '../components/Card'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/css/productsCards.css'


const CardsProducts = () => {
  return (
    <main className="layout">
      <section className="header">
        <Header />
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

