import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";
import { Category } from './Category';
import { Cart } from './Cart';
import { Ask } from './Ask';
import { Visit } from './Visit';
import { CartItems } from "./CartItems";

User.hasMany(Address, {foreignKey: 'users_id'})
Address.belongsTo(User, {foreignKey: 'id'})

User.hasMany(Cart)
Cart.belongsTo(User)
CartItems.hasMany(Product, {foreignKey:'id'})
Product.belongsTo(CartItems, {foreignKey:'id'})

Product.hasMany(Ask)
Ask.belongsTo(Product)
Product.hasMany(Visit)
User.hasMany(Visit)
Visit.belongsTo(Product)
Visit.belongsTo(User)

export {
    User, 
    Address,
    Product,
    Category,
    Cart,
    CartItems,
    Ask,
    Visit
}