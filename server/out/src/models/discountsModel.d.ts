type Discount = {
    discount_id: string;
    discount: string;
};
declare const DiscountsModel: {
    findAll(): Promise<Discount[]>;
    findById(id: string): Promise<Discount | null>;
    create(discount: Discount): Promise<Discount | null>;
    update(discount: Discount, id: string): Promise<Discount | null>;
    delete(id: string): Promise<boolean>;
};
export default DiscountsModel;
