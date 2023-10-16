import DetailsPruducts from "./DetailsProducts"
import ImageProduct from "./ImageProducts"
import NavButtons from "./NavCardButtons"



const Card = () => {
  return (
    <section className="cardWraper">
      <ImageProduct />
      <article className="details">
        <DetailsPruducts />
        <NavButtons />
      </article>
    </section>
  )
}

export default Card