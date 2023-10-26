import { useLoaderData, Link} from "react-router-dom" 


const icons = ['/src/assets/icon-user.svg', '/src/assets/icon-car.svg']
export const MainScreen = () => {
  const product = useLoaderData();
  
  return (
  <>
    <section className="video-background">
     <video className="videoproduct" autoPlay loop="infinit" muted key={"product.video"} src={"product.video "|| null} ></video>
    </section>
    <header className="headerButtons">
    <button className="headerButtons__btn-header">
      <img src={icons.at(0)} alt="" className="icon-user" />
    </button>
    <article className="categoryCakes">
      <h1 className="titleCategory-cakes">{"product.category"}</h1>
    </article>
    <button className="headerButtons__btn-header">
      <img src={icons.at(1)} alt="" className="icon-car" />
    </button>
      </header>
    <section className="main-screen">
      <figure className="logo">
        <img src="src/assets/logo.svg" alt="" className="logo__embed" />
      </figure>
      <article className="all-description">
        <h1 className="all-description__title" >{product.title}</h1>
        <h2 className="all-description__price" >{product.price}</h2>
        <p className="all-description__description" >{product.description}</p>
      </article>
      <nav className="navButtons">
        <Link to='/products'>
        <button className="navButtons__btn-nav" >
          <img src={icons.at(0)} alt="" className="icon-embed" />
        </button>
        </Link>
        <button className="navButtons__btn-nav">
          <img src={icons.at(1)} alt="" className="icon-embed" />
        </button>
        <button className="navButtons__btn-nav">
          <img src={icons.at(2)} alt="" className="icon-embed" />
        </button>
      </nav> 
    </section>
  </>    
  )
}
