type HttpDiscountResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        discounts: T[];
    };
};
    
type Discount = {
    discount_id: string;
    discount: string;
};
    
export { Discount, HttpDiscountResponse };
    