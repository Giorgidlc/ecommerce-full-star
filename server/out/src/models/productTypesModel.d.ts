type ProductType = {
    types_id: string;
    product_type: string;
};
declare const ProductTypesModel: {
    findAll(): Promise<ProductType[]>;
    findById(id: string): Promise<ProductType | null>;
    create(productType: ProductType): Promise<ProductType | null>;
    update(productType: ProductType, id: string): Promise<ProductType | null>;
    delete(id: string): Promise<boolean>;
};
export default ProductTypesModel;
