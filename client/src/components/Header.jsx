/* import { PropTypes } from 'prop-types'; */
import { useLoaderData } from "react-router-dom"
const icons = ['/src/assets/icon-user.svg', '/src/assets/icon-car.svg']

const Header = () => {
  const data = useLoaderData()
  console.log(data)
  const categoryName = data.categoryName

  return (
    <header className="headerButtons">
      <button className="headerButtons__btn-header">
        <img src={icons.at(0)} alt="" className="icon-user" />
      </button>
      <article className="categoryCakes">
        <h1 style={{color: "black"}} className="titleCategory-cakes">{categoryName}</h1>
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