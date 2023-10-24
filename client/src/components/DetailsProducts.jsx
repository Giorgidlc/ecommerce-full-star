
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types'

const DetailsProducts = (products) => {
  const productsData = useLoaderData();
  console.log(products)
  
  return (
    
    <article className="all-description">
      {productsData.length ? (
        <>
          {productsData.map((product) => (
          <>
            <h1 className="all-description__title" key={product.id}>{product.title}</h1>
            <h2 className="all-description__price" key={product.id}>{product.price}</h2>
            <p className="all-description__description" key={product.id}>{product.description}</p>
          </>
        ))}
        </>
      ) : ( <p>No product</p>)}
     
    </article>  
  )
}

export default DetailsProducts


DetailsProducts.propTypes = {
  products: PropTypes.string.isRequired
}