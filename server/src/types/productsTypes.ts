type HttpProductResponse<T> = { 
    status: number;
    headers: Record<string, string>;
    body:{
        products: T[];
    } ;
};

type Products = {
    product_id: string;
    product_name: string;
    product_description: string,
    price: number;
    stock: number; 
    product_type_id: string;
    product_discount_id: string;
}

export {Products, HttpProductResponse};