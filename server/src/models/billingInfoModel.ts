    import { openConnectionDb, closeConnectionDb } from '../config/db';
    import { BillingInfo } from '../types/billingInfoTypes';

    const BillingInfoModel = {
    async create(billingInfo: BillingInfo): Promise<BillingInfo | null> {
        let connection = await openConnectionDb();
        const {
        street,
        user_number,
        flat,
        door,
        zipcode,
        county,
        city,
        country,
        user_id,
        } = billingInfo;
        const [newBillingInfo] = await connection.query(
        'INSERT INTO Billing_Info (street, user_number, flat, door, zipcode, county, city, country, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, UUID_TO_BIN(?))',
        [street, user_number, flat, door, zipcode, county, city, country, user_id]
        );
        await closeConnectionDb(connection);

        if (newBillingInfo && 'affectedRows' in newBillingInfo && newBillingInfo.affectedRows > 0) {
        return { ...billingInfo, billing_id: String(newBillingInfo.insertId) };
        }

        return null;
    },

    async findAll(): Promise<BillingInfo[]> {
        let connection = await openConnectionDb();
        const [billingInfos] = await connection.query(
        'SELECT * , BIN_TO_UUID(billing_id) billing_id, street, user_number, flat, door, zipcode, county, city, country, BIN_TO_UUID(user_id) user_id FROM Billing_Info'
        );
        await closeConnectionDb(connection);
        return billingInfos as BillingInfo[];
    },

    async findById(id: string): Promise<BillingInfo | null> {
        let connection = await openConnectionDb();
        const [billingInfo,metaData] = await connection.query(
        'SELECT * , BIN_TO_UUID(billing_id) billing_id, street, user_number, flat, door, zipcode, county, city, country, BIN_TO_UUID(user_id) user_id FROM Billing_Info WHERE billing_id = UUID_TO_BIN(?)',
        [id]
        );
        await closeConnectionDb(connection);
        return (billingInfo as BillingInfo[])[0] || null;
    },

    async update(billingInfo: BillingInfo, id: string): Promise<BillingInfo | null> {
        let connection = await openConnectionDb();
        const {
        street,
        user_number,
        flat,
        door,
        zipcode,
        county,
        city,
        country,
        user_id,
        } = billingInfo;
        const [updatedBillingInfo] = await connection.query(
        'UPDATE Billing_Info SET street = ?, user_number = ?, flat = ?, door = ?, zipcode = ?, county = ?, city = ?, country = ?, user_id = UUID_TO_BIN(?) WHERE billing_id = UUID_TO_BIN(?)',
        [street, user_number, flat, door, zipcode, county, city, country, user_id, id]
        );
        await closeConnectionDb(connection);
        if (updatedBillingInfo && 'affectedRows' in updatedBillingInfo && updatedBillingInfo.affectedRows > 0) {
        return billingInfo;
        } else {
        return null;
        }
    },

    async delete(id: string):  Promise<BillingInfo | null>{
        let connection = await openConnectionDb();
        const [deletedBillingInfo] = await connection.query(
        'DELETE FROM Billing_Info WHERE billing_id = UUID_TO_BIN(?)',
        [id]
        );
        await closeConnectionDb(connection);
        return (deletedBillingInfo as BillingInfo[])[0] || null;
    },
    async eliminateByStreet(street: string): Promise<BillingInfo | null>{
        
        let connection = await openConnectionDb();
        const [eliminatedProducts, metaData] = await connection.query('DELETE FROM Billing_info WHERE street = ?', [street]);
        await closeConnectionDb(connection);
        return (eliminatedProducts as BillingInfo[])[0] || null;
    }
}

    

    export default BillingInfoModel;
