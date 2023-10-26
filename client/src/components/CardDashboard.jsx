import ProductsDetails from "./ProductsDetails"
import ImageProduct from "./ProductImage"
import NavCardButtons from "./DashboardButtons"



const CardDashboard = () => {
  return (
    <section className="cardWraper">
      <ImageProduct />
      <article className="details">
        <ProductsDetails />
        <NavCardButtons />
      </article>
    </section>
  )
}


export default CardDashboard