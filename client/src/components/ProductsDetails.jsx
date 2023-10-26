import PropTypes from 'prop-types'

const ProductsDetails = ({title, price , description}) => {
  return (
    <article className="all-description">
      <h1 className="all-description__title">{title}</h1>
      <h2 className="all-description__price">{price}</h2>
      <p className="all-description__description">{description}</p>
    </article>  
  )
}

ProductsDetails.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,

}


export default ProductsDetails




  
