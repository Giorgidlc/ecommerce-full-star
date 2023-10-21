
type HttpProductResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body:{
        products: T[];
    } ;
};

type Product = {
    product_id: string;
    product_name:  string;
    product_description:string,
    price: number;
    stock: number; 
    product_type_id: any;
    product_discount_id: any;

}
export {Product, HttpProductResponse};