import { openConnectionDb, closeConnectionDb } from '../config/db';
import { PayingMethod } from '../types/payingMethodTypes';

const PayingMethodsModel = {
    async findAll() {
        let connection = await openConnectionDb();
        const [payingMethods, metadata] = await connection.query('SELECT * FROM Paying_methods');
        await closeConnectionDb(connection);
        return payingMethods;
    },

    async create(paying_method_name: string) {
        let connection = await openConnectionDb();
        const [newPayingMethod, metadata] = await connection.query(
        'INSERT INTO paying_methods (paying_method_name) VALUES (?)',
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
    async update(payingMethod: PayingMethod , id: string): Promise<PayingMethod| null> {
        let connection = await openConnectionDb();
       
        const [updatedPayingMethod, metaData] = await connection.query(
        'UPDATE Paying_method SET paying_method_name = ? WHERE billing_id = UUID_TO_BIN(?)',
        [payingMethod, id]
        );
        await closeConnectionDb(connection);
        if (updatedPayingMethod && 'affectedRows' in updatedPayingMethod && updatedPayingMethod.affectedRows > 0) {
        return payingMethod;
        } else {
        return null;
        }
    },
    async eliminateByPayingMethod(payingMethod: string){
        
        let connection = await openConnectionDb();
        const [eliminatedPayingMethod, metaData] = await connection.query('DELETE FROM Paying_methods WHERE paying_method_name = ?', [payingMethod]);
        await closeConnectionDb(connection);
        return eliminatedPayingMethod;
    }
};

export default PayingMethodsModel;
