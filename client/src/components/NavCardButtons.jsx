const icons = ['/src/assets/icon-add.svg', '/src/assets/icon-fav.svg' ]

const NavButtons = () => {

  return (
    <nav className="nav-cardButtons">
      <button className="nav-cardButtons__btn-nav">
        <img src={icons.at(0)} alt="" className="icon-embed" />
      </button>
      <label className="nav-cardButtons__btn-nav">
        <input type="checkbox" className="hidden-checkbox" />
        <span className="icon-embed-fav"></span>
      </label>
    </nav>
  )
}

export default NavButtons