import { getProducts } from "../utils/productController";

export async function loaderGetProducts() {
  const products = await getProducts();
  return { products }
}
