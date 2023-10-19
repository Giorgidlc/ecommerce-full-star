import { PropTypes } from 'prop-types';

const DetailsProducts = ({ product }) => {
  
  return (
    <article className="all-description">
      <h1 className="all-description__title">{ product.title }</h1>
      <h2 className="all-description__price">{ product.price }</h2>
      <p className="all-description__description">{ product.description }</p>
    </article>  
  )
}

export default DetailsProducts

DetailsProducts.propTypes = {
  product: PropTypes.string.isRequired
}