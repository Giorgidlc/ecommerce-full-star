/* import { PropTypes } from 'prop-types'; */
import { useLoaderData } from "react-router-dom"
const icons = ['/src/assets/icon-user.svg', '/src/assets/icon-car.svg']
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleUserIconClick = () => {
    navigate('/login');
  }
  const data = useLoaderData()
  console.log(data)
  const categoryName = data.categoryName


  return (

    <article className="header-container">
      <button className="headerButtons__btn-header">
        <img src={icons.at(0)} alt="" className="icon-user" />
      </button>
      <article className="categoryCakes">
        <h1 className="titleCategory">{categoryName}</h1>
      </article>
      <button className="headerButtons__btn-header">
        <img src={icons.at(1)} alt="" className="icon-car" />
      </button>
    </article>

  )
}

export default Header

/* Header.propTypes = {
  product: PropTypes.string.isRequired
} */