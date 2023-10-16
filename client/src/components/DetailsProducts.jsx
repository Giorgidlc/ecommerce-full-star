const logo = './src/assets/logo.svg'

const DetailsPruducts = () => {
  return (
    <>
      <section className="details-content">
        <figure className="logo">
          <img src={ logo } alt="logo Dreams&Cookies" className="logo__embed" />
        </figure>
        <article className="all-description">
          <h1 className="all-description__title">Tarta de zanahoria</h1>
          <h2 className="all-description__price">29.99€</h2>
          <p className="all-description__description">Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      </section>      
    </>
  )
}

export default DetailsPruducts