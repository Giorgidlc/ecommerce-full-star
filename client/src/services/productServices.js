const API_URL = "http://localhost:5000/products/"

export async function getProducts() {
  const products = await (await fetch(API_URL)).json();
  return products;
}

export async function getProduct({params}) {
  const product = await (await fetch(API_URL + params.productId)).json();
  return { product };
} 