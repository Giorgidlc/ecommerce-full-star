/* import { PropTypes } from 'prop-types'; */
const icons = ['/src/assets/icon-user.svg', '/src/assets/icon-car.svg']

const Header = () => {
  return (
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
  )
}

export default Header

/* Header.propTypes = {
  product: PropTypes.string.isRequired
} */