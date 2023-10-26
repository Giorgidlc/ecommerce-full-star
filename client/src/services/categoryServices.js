const API_URL = "http://localhost:3000/category/"

export async function getCategories() {
  const categories = await (await fetch(API_URL)).json();
  return categories;
}

export async function getCategory({params}) {
  const category = await (await fetch(API_URL + params.productId)).json();
  return { category };
} 

console.log(getCategory())