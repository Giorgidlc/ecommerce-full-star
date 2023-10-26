import { getProducts/* , getCategories */} from "../services/productServices";


export async function loaderServices() {
  const products = await getProducts();
  return { products }
}


/* export async function loaderProductsByCategory({ params }) {
  const categoryId = params.getCategories
}
 */
/* 

const API_URL = "http://localhost:3000/category/"

export async function getCategories() {
  const categories = await (await fetch(API_URL)).json();
  return categories;
} */