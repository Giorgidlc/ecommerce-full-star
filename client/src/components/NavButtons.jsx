const icons = ['/src/assets/icon-list.svg', '/src/assets/icon-add.svg', '/src/assets/icon-fav.svg' ]

const NavButtons = () => {
  return (
    <nav className="navButtons">
      <button className="navButtons__btn-nav">
        <img src={icons.at(0)} alt="" className="icon-embed" />
      </button>
      <button className="navButtons__btn-nav">
        <img src={icons.at(1)} alt="" className="icon-embed" />
      </button>
      <button className="navButtons__btn-nav">
        <img src={icons.at(2)} alt="" className="icon-embed" />
      </button>
    </nav>
  )
}

export default NavButtons