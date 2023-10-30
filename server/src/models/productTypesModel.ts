import { openConnectionDb, closeConnectionDb } from '../config/db';

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

    async create(productType: ProductType) {
        let connection = await openConnectionDb();
        const { product_type } = productType;
        const [newProductType, metadata] = await connection.query(
            'INSERT INTO Product_Types (product_type) VALUES (?)',
            [product_type]
        );
        await closeConnectionDb(connection);
    
      return  newProductType;
    },
    
    async update(productType: ProductType, id: string){
        let connection = await openConnectionDb();

        const [updatedProductType, metadata] = await connection.query(
            'UPDATE Product_Types SET product_type = ? WHERE types_id = UUID_TO_BIN(?)',
            [productType, id]
        );
        await closeConnectionDb(connection);

        return updatedProductType;
       
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
    } ,
    async eliminateByType(type: string){
        
        let connection = await openConnectionDb();
        const [eliminatedProducts, metaData] = await connection.query('DELETE FROM Products-types WHERE product_type = ?', [type]);
        await closeConnectionDb(connection);
        return eliminatedProducts;
    }
};

export default ProductTypesModel;
