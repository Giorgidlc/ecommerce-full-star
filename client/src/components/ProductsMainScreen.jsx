import PropTypes from 'prop-types'
import Header from "./Header";
import Logo from "./Logo";
import ProductDetails from "./ProductDetails";
import NavButtons from "./NavButtons";

const ProductsMainScreen = ({ product }) => {
  console.log(product)
 
  return (
    <main className="container-mainScreen">
       {/*  <BackgorundVideo /> */}
       <Header />
      <section className="wrapper-details">
        <Logo />
        <ProductDetails product={product} />
        <aside className="navProduct-btn">
          <NavButtons />
        </aside>
      </section>
    </main> 
  )
 
}

export default ProductsMainScreen

ProductsMainScreen.propTypes = {
  product: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}