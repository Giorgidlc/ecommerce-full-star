import Card from '../components/Card'
import '../styles/css/productsCards.css'


const CardsProducts = () => {
  return (
    <main className="layout">
      <section className="header">
        {/* colocar el componente de header */}
      </section>
      <section className="cardsProducts">
        <Card />
        <Card />
        <Card />
        <Card />
      </section> 
      <section className="footer">
        {/* colocar componente de footer */}
      </section>
  </main>
  )
}

export default CardsProducts

