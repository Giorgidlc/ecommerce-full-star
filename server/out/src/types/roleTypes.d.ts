type HttpRoleResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        roles: T[];
    };
};
type Roles = {
    role_id: string;
    user_type: string;
};
export { Roles, HttpRoleResponse };
