import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";

  User.hasMany(Address, {foreignKey: 'users_id'})
  Address.belongsTo(User, {foreignKey: 'id'})


export {
    User, 
    Address,
    Product 
}