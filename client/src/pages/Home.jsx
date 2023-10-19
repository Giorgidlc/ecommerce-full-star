import '../styles/css/home.css'
import { useLoaderData }  from 'react-router-dom'
import DetailsProducts from "../components/DetailsProducts.jsx"
import NavButtons from '../components/NavButtons.jsx'
import { Footer } from '../components/Footer.jsx'
import Header from '../components/Header'
import Logo from '../components/Logo'


const Home = () => {
  const product = useLoaderData();

  return (
    <main className="layout">
      <section className="video-background">
        <video autoPlay loop="infinit" muted src="/src/assets/Chocolate Chip Cookie.mp4" className="videoproduct"></video>
      </section>
      <section className="header">
        <Header product={ product } />
      </section>
      <section className="detailsProducts">
        
        <article className='detailsProducts__content'>
          <Logo />
          <DetailsProducts product={ product } />
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