const API_URL = "http://localhost:3000/category/"

export async function getCategories() {
  const products = await (await fetch(API_URL)).json();
  return products;
}

export async function getCategory(id) {
  const product = await (await fetch(API_URL + id)).json();
  return product;
}