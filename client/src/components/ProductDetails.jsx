import PropTypes from 'prop-types'


/* export const ProductDetails = ({product}) => {
    
  return (   
    <article className="all-description">
        <h1 className="all-description__title" >{product.product_name}</h1>
        <h2 className="all-description__price" >{product.price}</h2>
        <p className="all-description__description" >{product.product_description}</p>
    </article>
  )
}


export default ProductDetails


ProductDetails.propTypes = {
  product: PropTypes.string.isRequired
} */


export const ProductDetails = ({product}) => {
    
  return (   
    <article className="all-description">
        <h1 className="all-description__title" >{product.title}</h1>
        <h2 className="all-description__price" >{product.price}</h2>
        <p className="all-description__description" >{product.description}</p>
    </article>
  )
}


export default ProductDetails


ProductDetails.propTypes = {
  product: PropTypes.string.isRequired
}