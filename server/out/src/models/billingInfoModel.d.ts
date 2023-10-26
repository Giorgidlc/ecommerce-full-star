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
declare const BillingInfoModel: {
    create(billingInfo: BillingInfo): Promise<BillingInfo | null>;
    findAll(): Promise<BillingInfo[]>;
    findById(id: string): Promise<BillingInfo | null>;
    update(billingInfo: BillingInfo, id: string): Promise<BillingInfo | null>;
    delete(id: string): Promise<boolean>;
};
export default BillingInfoModel;
