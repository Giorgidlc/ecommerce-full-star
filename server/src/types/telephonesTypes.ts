type HttpPhoneResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        phones: T[];
    };
};

type Telephone = {
    phone_id: string;
    phone: string;
    user_id: string;
};

export { Telephone, HttpPhoneResponse };
