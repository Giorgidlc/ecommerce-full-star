import { useLoaderData } from "react-router-dom"
const icons = ['/src/assets/icon-user.svg', '/src/assets/icon-car.svg']


const Header = () => {
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