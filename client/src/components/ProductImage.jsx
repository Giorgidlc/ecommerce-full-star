import PropTypes from 'prop-types'


const ProductImage = ({ image, textImg }) => {
  return (
    <figure className="image-product">
      <img src={ image } alt= {textImg} className="image-product__embed" />
    </figure>
  )
}

ProductImage.propTypes = {
  image: PropTypes.string,
  textImg: PropTypes.string,
}



export default ProductImage