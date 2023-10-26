
import UserModel from './usersModel.ts';
import RolesModel from './rolesModel.ts';
import UserRolesModel from './userRolesModel.ts';


UserModel.hasMany(UserRolesModel, {
    foreignKey: 'user_id',
    sourceKey: 'user_id',
    as: 'roles'
});

RolesModel.hasMany(UserRolesModel, {
    foreignKey: 'role_id',
    sourceKey: 'role_id',
    as: 'users'
});

UserRolesModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    targetKey: 'user_id',
    as: 'user'
});

UserRolesModel.belongsTo(RolesModel, {
    foreignKey: 'role_id',
    targetKey: 'role_id',
    as: 'role'
});

export { UserModel, RolesModel, UserRolesModel };
