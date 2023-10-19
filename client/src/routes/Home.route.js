import { getProduct } from "../utils/productController";

export async function loaderGetProduct() {
  const product = await getProduct(1);
  return product
}

