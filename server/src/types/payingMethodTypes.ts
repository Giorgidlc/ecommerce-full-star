type HttpPayingMethodResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        payingMethods: T[];
    };
};
    
type PayingMethod = {
    paying_method_id: string;
    paying_method_name: string;
};
    
export { PayingMethod, HttpPayingMethodResponse };
    