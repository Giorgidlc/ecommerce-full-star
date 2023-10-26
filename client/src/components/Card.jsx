//import { useLoaderData } from "react-router-dom"
import ProductDetails from "./ProductDetails"
import ImageProduct from "./ImageProducts"
import NavButtons from "./NavCardButtons"
import { PropTypes } from "prop-types"


const Card = ({product}) => {
  console.log(product)

  return (
    <section className="cardWraper">
      <ImageProduct />
      <article className="details">
        <ProductDetails product={ product } />
        <NavButtons />
      </article>
    </section>
  )
}

export default Card

Card.propTypes = {
  product: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}