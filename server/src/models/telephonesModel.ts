import { openConnectionDb, closeConnectionDb } from '../config/db';

type Telephone = {
    phone_id: string;
    phone: string;
    user_id: string;
};

const TelephonesModel = {
    async findAll(): Promise<Telephone[]> {
        let connection = await openConnectionDb();
        const [phones, metadata] = await connection.query(
            'SELECT * , BIN_TO_UUID(phone_id) phone_id, BIN_TO_UUID(user_id) user_id FROM Telephones'
        );
        await closeConnectionDb(connection);
        return phones as Telephone[];
    },

    async findById(id: string): Promise<Telephone | null> {
        let connection = await openConnectionDb();
        const [phone, metadata] = await connection.query(
            'SELECT * , BIN_TO_UUID(phone_id) phone_id, BIN_TO_UUID(user_id) user_id FROM Telephones WHERE phone_id = UUID_TO_BIN(?)',
            [id]
        );
        await closeConnectionDb(connection);
        return (phone as Telephone[])[0] || null;
    },

    async create(phone: Telephone): Promise<Telephone | null> {
        let connection = await openConnectionDb();
        const { phone: phoneNumber, user_id } = phone;
        try {
            const [newPhone, metadata] = await connection.query(
                'INSERT INTO Telephones (phone, user_id) VALUES (?, UUID_TO_BIN(?))',
                [phoneNumber, user_id]
            );
            await closeConnectionDb(connection);

            if (Array.isArray(newPhone) && newPhone.length > 0) {
                const [insertedPhone] = newPhone;
                if (insertedPhone && 'insertId' in insertedPhone) {
                    return { ...phone, phone_id: String(insertedPhone.insertId) };
                }
            }
        } catch (error) {
            console.error('Error in create phone:', error);
        }

        return null;
    },

    async update(phone: Telephone, id: string): Promise<Telephone | null> {
        let connection = await openConnectionDb();
        const { phone: phoneNumber, user_id } = phone;
        try {
            const [updatedPhone, metadata] = await connection.query(
                'UPDATE Telephones SET phone = ?, user_id = UUID_TO_BIN(?) WHERE phone_id = UUID_TO_BIN(?)',
                [phoneNumber, user_id, id]
            );
            await closeConnectionDb(connection);

            if (Array.isArray(updatedPhone) && updatedPhone.length > 0) {
                return phone;
            }
        } catch (error) {
            console.error('Error in update phone:', error);
        }

        return null;
    },

    async delete(id: string): Promise<boolean> {
        let connection = await openConnectionDb();
        try {
            const [deletedPhone, metadata] = await connection.query(
                'DELETE FROM Telephones WHERE phone_id = UUID_TO_BIN(?)',
                [id]
            );
            await closeConnectionDb(connection);

            return Array.isArray(deletedPhone) && deletedPhone.length > 0;
        } catch (error) {
            console.error('Error in delete phone:', error);
            return false;
        }
    },
};

export default TelephonesModel;


