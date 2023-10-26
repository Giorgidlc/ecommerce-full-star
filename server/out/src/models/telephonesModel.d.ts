type Telephone = {
    phone_id: string;
    phone: string;
    user_id: string;
};
declare const TelephonesModel: {
    findAll(): Promise<Telephone[]>;
    findById(id: string): Promise<Telephone | null>;
    create(phone: Telephone): Promise<Telephone | null>;
    update(phone: Telephone, id: string): Promise<Telephone | null>;
    delete(id: string): Promise<boolean>;
};
export default TelephonesModel;
