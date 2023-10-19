import { useLoaderData } from "react-router-dom"
import DetailsPruducts from "./DetailsProducts"
import ImageProduct from "./ImageProducts"
import NavButtons from "./NavCardButtons"



const Card = () => {
  const product = useLoaderData();

  return (
    <section className="cardWraper">
      <ImageProduct />
      <article className="details">
        <DetailsPruducts product={ product } />
        <NavButtons />
      </article>
    </section>
  )
}

export default Card