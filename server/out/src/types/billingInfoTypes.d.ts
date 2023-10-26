type HttpBillingInfoResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        billingInfo: T[];
    };
};
type BillingInfo = {
    billing_id: string;
    street: string;
    user_number: number;
    flat: number | null;
    door: string | null;
    zipcode: string;
    county: string;
    city: string;
    country: string;
    user_id: string;
};
export { BillingInfo, HttpBillingInfoResponse };
