import '../styles/css/home.css'
import DetailsProducts from "../components/DetailsProducts"
import NavButtons from '../components/NavButtons'
import LogoDetailsProducts from '../components/LogoDetailsProducts'


const Home = () => {
  return (
    <main className="layout">
      <section className="video-background">
        <video autoPlay muted src="" className="videoproduct"></video>
      </section>
      <section className="header">
        {/* colocar el componente de header */}
      </section>
      <section className="main-home">
        <section className='details-content'>
          <LogoDetailsProducts />
          <DetailsProducts />
        </section>
        
        <NavButtons />
      </section> 
      <section className="footer">
        {/* colocar componente de footer */}
      </section>
  </main>
  )
}

export default Home

