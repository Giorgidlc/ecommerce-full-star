type HttpUserResponse<T> = { 
    status: number;
    headers: Record<string, string>;
    body:{
        users: T[];
    } ;
};

type Users = {
    user_id: string;
    user_name: string;
    surname: string,
    email: string;
    user_password: string; 
    paying_method_id: string;
    register_date: string; //Investigar si es "any" o "string"
}

export {Users, HttpUserResponse};