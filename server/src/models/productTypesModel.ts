import { openConnectionDb, closeConnectionDb } from '../config/db.ts';

type ProductType = {
    types_id: string;
    product_type: string;
};

const ProductTypesModel = {
    async findAll(): Promise<ProductType[]> {
        let connection = await openConnectionDb();
        const [productTypes, metadata] = await connection.query('SELECT * , BIN_TO_UUID(types_id) types_id FROM Product_Types');
        await closeConnectionDb(connection);
        return productTypes as ProductType[]; // Especifica explícitamente el tipo de productTypes como ProductType[]
    },

    async findById(id: string): Promise<ProductType | null> {
        let connection = await openConnectionDb();
        const [productType, metadata] = await connection.query(
            'SELECT * , BIN_TO_UUID(types_id) types_id FROM Product_Types WHERE types_id = UUID_TO_BIN(?)',
            [id]
        );
        await closeConnectionDb(connection);
        return (productType as ProductType[])[0] || null; // Especifica explícitamente el tipo de productType como ProductType[] o null si no hay resultados
    },

    async create(productType: ProductType): Promise<ProductType | null> {
        let connection = await openConnectionDb();
        const { product_type } = productType;
        const [newProductType, metadata] = await connection.query(
            'INSERT INTO Product_Types (product_type) VALUES (?)',
            [product_type]
        );
        await closeConnectionDb(connection);
    
        // Verificar si newProductType es un array y si tiene la propiedad insertId
        if (Array.isArray(newProductType) && 'insertId' in newProductType[0]) {
            // newProductType[0] contiene los resultados de la consulta
            return { ...productType, types_id: newProductType[0].insertId };
        } else {
            // En caso de que newProductType no sea un array o no tenga insertId
            return null;
        }
    },
    
    async update(productType: ProductType, id: string): Promise<ProductType | null> {
        let connection = await openConnectionDb();
        const { product_type } = productType;
        const [updatedProductType, metadata] = await connection.query(
            'UPDATE Product_Types SET product_type = ? WHERE types_id = UUID_TO_BIN(?)',
            [product_type, id]
        );
        await closeConnectionDb(connection);
        // Verificar si updatedProductType es un array y si tiene la propiedad affectedRows
        if (Array.isArray(updatedProductType) && 'affectedRows' in updatedProductType[0]) {
        // updatedProductType[0] contiene los resultados de la consulta
        return updatedProductType[0].affectedRows > 0 ? productType : null;
        } else {
        // En caso de que updatedProductType no sea un array o no tenga affectedRows
        return null;
        }
    },

    async delete(id: string): Promise<boolean> {
        let connection = await openConnectionDb();
        const [deletedProductType, metadata] = await connection.query(
            'DELETE FROM Product_Types WHERE types_id = UUID_TO_BIN(?)',
            [id]
        );
        await closeConnectionDb(connection);
    
        // Verificar si deletedProductType es un array y si tiene la propiedad affectedRows
        if (Array.isArray(deletedProductType) && 'affectedRows' in deletedProductType[0]) {
            // deletedProductType[0] contiene los resultados de la consulta
            return deletedProductType[0].affectedRows > 0;
        } else {
            // En caso de que deletedProductType no sea un array o no tenga affectedRows
            return false;
        }
    } 
};

export default ProductTypesModel;
