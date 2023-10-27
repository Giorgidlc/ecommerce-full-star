import { Link } from 'react-router-dom'
const icons = ['/src/assets/icon-list.svg', '/src/assets/icon-add.svg']

const NavButtons = () => {
  return (
    <nav className="navButtons">
      <Link to='/products/1'>
      <button className="navButtons__btn-nav" >
        <img src={icons.at(0)} alt="" className="icon-embed" />
      </button>
      </Link>
      <button className="navButtons__btn-nav">
        <img src={icons.at(1)} alt="" className="icon-embed" />
      </button>
      <label className="nav-cardButtons__btn-nav">
        <input type="checkbox" className="hidden-checkbox" />
        <span className="icon-embed-fav"></span>
      </label>
    </nav>
  )
}

export default NavButtons