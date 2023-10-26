
async function loaderCardsDashboard () {
    const res = await fetch("http://localhost:3000/products")
    const products = await res.json()
    return products
  }


    
    export default loaderCardsDashboard;