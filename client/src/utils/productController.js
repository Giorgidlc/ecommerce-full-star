const API_URL = "http://localhost:3000/products/"

export async function getProducts() {
  const products = await (await fetch(API_URL)).json();
  return products;
}

export async function getProduct(id) {
  const product = await (await fetch(API_URL + id)).json();
  return product;
} 