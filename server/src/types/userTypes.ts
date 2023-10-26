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
    user_password: number; 
    paying_method_id: any;
    register_date: any; //Investigar si es "any" o "string"
}

export {Users, HttpUserResponse};