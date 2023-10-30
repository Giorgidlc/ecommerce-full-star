//const URL_productsByCategories = "http://localhost:3000/products?categoryId="
//const URL_categories = "http://localhost:3000/categories/"

const loaderProductsByCategory = async ({ params }) => {
  const categoryId = params.types_id;

  const resProducts = await fetch(`http://localhost:5000/products?types_id=${categoryId}`);
  const products = await resProducts.json();

  const resCategory = await fetch(`http://localhost:5000/Product_Types/${categoryId}`);
  const category = await resCategory.json();
  const categoryName = category ? category.name : null;
  
  return {products, categoryName};
}

export default loaderProductsByCategory


