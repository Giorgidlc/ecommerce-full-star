/* import { PropTypes } from 'prop-types'; */
import { useLoaderData, Link } from "react-router-dom"
const icons = ['/src/assets/icon-back.svg', '/src/assets/icon-car.svg']

const HeaderCards = () => {
  const data = useLoaderData()
  console.log(data)
  const categoryName = data.categoryName

  return (

    <article className="header-containerCards">
      <Link to='/product/1'>
        <button className="headerButtons__btn-headerCards">
          <img src={icons.at(0)} alt="Buttom Back" className="icon-embed" />
        </button>
      </Link>
      <article className="categoryCakesCards">
        <h1 className="titleCategoryCards">{categoryName}</h1>
      </article>
      <button className="headerButtons__btn-headerCards">
        <img src={icons.at(1)} alt="" className="icon-embed" />
      </button>
    </article>

  )
}

export default HeaderCards

/* Header.propTypes = {
  product: PropTypes.string.isRequired
} */