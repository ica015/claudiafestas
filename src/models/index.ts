import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";
import { Category } from './Category';
import { Cart } from './Cart';
import { Ask } from './Ask';

  User.hasMany(Address, {foreignKey: 'users_id'})
  Address.belongsTo(User, {foreignKey: 'id'})

  User.hasMany(Cart)
  Cart.belongsTo(User)
 // Cart.hasMany(Product, {foreignKey:'product_id'})

 Product.hasMany(Ask)
 Ask.belongsTo(Product)

export {
    User, 
    Address,
    Product,
    Category,
    Cart,
    Ask
}