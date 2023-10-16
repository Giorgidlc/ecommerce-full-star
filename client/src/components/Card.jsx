import DetailsPruducts from "./DetailsProducts"
import ImageProduct from "./ImageProducts"
import NavCardButtons from "./NavCardButtons"



const Card = () => {
  return (
    <section className="cardWraper">
      <ImageProduct />
      <article className="details">
        <DetailsPruducts />
        <NavCardButtons />
      </article>
    </section>
  )
}

export default Card