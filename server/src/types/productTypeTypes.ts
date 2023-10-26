type HttpProductTypeResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        productTypes: T[];
    };
};
    
type ProductType = {
    types_id: string;
    product_type: string;
};
    
export { ProductType, HttpProductTypeResponse };
    