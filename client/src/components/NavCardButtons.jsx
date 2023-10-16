const icons = ['/src/assets/icon-add.svg', '/src/assets/icon-fav.svg' ]

const NavCardButtons = () => {
  return (
    <nav className="nav-cardButtons">
      <button className="nav-cardButtons__btn-nav">
        <img src={icons.at(0)} alt="" className="icon-embed" />
      </button>
      <button className="nav-cardButtons__btn-nav">
        <img src={icons.at(1)} alt="" className="icon-embed" />
      </button>
    </nav>
  )
}

export default NavCardButtons