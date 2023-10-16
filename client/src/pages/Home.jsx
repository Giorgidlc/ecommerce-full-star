import '../styles/css/home.css'
import DetailsProducts from "../components/DetailsProducts.jsx"
import NavButtons from '../components/NavButtons.jsx'
import { Footer } from '../components/Footer.jsx'
import Header from '../components/Header'


const Home = () => {
  return (
    <main className="layout">
      <section className="video-background">
        <video autoPlay muted src="" className="videoproduct"></video>
      </section>
      <section className="header">
        <Header />
      </section>
      <section className="detailsProducts">
        <article className='detailsProducts__content'>
          <DetailsProducts />
          <NavButtons />
        </article>
      </section> 
      <section className="footer">
          <Footer />
      </section>
  </main>
  )
}

export default Home