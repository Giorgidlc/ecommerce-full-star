const logo = './src/assets/logo.svg'

const Card = () => {
  return (
    <section className="cardWraper">
      <figure className="img-conteiner">
        <img src={ logo } alt="Imagen de producto" className="image-embed" />
      </figure>
      
    </section>
  )
}

export default Card