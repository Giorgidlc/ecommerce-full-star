import { openConnectionDb, closeConnectionDb } from '../config/db';

const PayingMethodsModel = {
    async findAll() {
        let connection = await openConnectionDb();
        const [payingMethods, metadata] = await connection.query('SELECT * , BIN_TO_UUID(paying_method_id) paying_method_id FROM Paying_methods');
        await closeConnectionDb(connection);
        return payingMethods;
    },

    async create(paying_method_name: string) {
        let connection = await openConnectionDb();
        const [newPayingMethod, metadata] = await connection.query(
        'INSERT INTO Paying_methods (paying_method_name) VALUES (?)',
        [paying_method_name]
        );
        await closeConnectionDb(connection);
        return newPayingMethod;
    },

    async delete(paying_method_id: string) {
        let connection = await openConnectionDb();
        const [deletedPayingMethod, metadata] = await connection.query(
        'DELETE FROM Paying_methods WHERE paying_method_id = UUID_TO_BIN(?)',
        [paying_method_id]
        );
        await closeConnectionDb(connection);
        return deletedPayingMethod;
    },
};

export default PayingMethodsModel;
