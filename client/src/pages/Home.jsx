import '../styles/css/home.css'
import { Outlet }  from 'react-router-dom'
import NavButtons from '../components/NavButtons.jsx'
import { Footer } from '../components/Footer.jsx'
import Header from '../components/Header'
import Logo from '../components/Logo'


const Home = () => {
  
  return (
    <main className="layout">
      <section className="video-background">
        <video className="videoproduct" autoPlay loop="infinit" muted key={"product.video"} src={"product.video "|| null} ></video>
      </section>
      <header className="header">
        <Header />
      </header>
      <section className="detailsProducts">
        <article className='detailsProducts__content'>
          <Logo />
          <Outlet />
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