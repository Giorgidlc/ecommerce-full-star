import { openConnectionDb, closeConnectionDb } from "../config/db";

type Discount = {
    discount_id: string;
    discount: string;
};

const DiscountsModel = {
    async findAll(): Promise<Discount[]> {
        let connection = await openConnectionDb();
        const [discounts, metadata] = await connection.query('SELECT * , BIN_TO_UUID(discount_id) discount_id FROM Discounts');
        await closeConnectionDb(connection);
        return discounts as Discount[];
    },

    async findById(id: string): Promise<Discount | null> {
        let connection = await openConnectionDb();
        const [discount, metadata] = await connection.query('SELECT * , BIN_TO_UUID(discount_id) discount_id FROM Discounts WHERE discount_id = UUID_TO_BIN(?)',[id]);
        await closeConnectionDb(connection);
        return (discount as Discount[])[0] || null;
    },

    async create(discount: Discount): Promise<Discount | null> {
        let connection = await openConnectionDb();
        const { discount: discountName } = discount;
        const [newDiscount, metadata] = await connection.query('INSERT INTO Discounts (discount) VALUES (?)', [discountName]);
        await closeConnectionDb(connection);
            
        if (newDiscount && 'insertId' in newDiscount) {
            return { ...discount, discount_id: String(newDiscount.insertId) };}
        return null;
    },

    async update(discount: Discount, id: string): Promise<Discount | null> {
        let connection = await openConnectionDb();
        const { discount: discountName } = discount;
        const [updatedDiscount] = await connection.query('UPDATE Discounts SET discount = ? WHERE discount_id = UUID_TO_BIN(?)', [discountName, id]);
        await closeConnectionDb(connection);
        if (Array.isArray(updatedDiscount) && updatedDiscount.length > 0) {
            return discount;
            } else {
            return null;}
        },
        
        async delete(id: string): Promise<boolean> {
            let connection = await openConnectionDb();
            const [deletedDiscount] = await connection.query('DELETE FROM Discounts WHERE discount_id = UUID_TO_BIN(?)', [id]);
            await closeConnectionDb(connection);
            return Array.isArray(deletedDiscount) && deletedDiscount.length > 0;
        }
};

export default DiscountsModel;
