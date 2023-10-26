type HttpUserRolesResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        userRoles: T[];
    };
};
type UserRoles = {
    role_id: string;
    user_id: string;
};
export { UserRoles, HttpUserRolesResponse };
