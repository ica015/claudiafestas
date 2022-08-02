import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";
import { Category } from './Category';
import { Cart } from './Cart';
import { Ask } from './Ask';
import { Visit } from './Visit';
import { CartItems } from "./CartItems";
import { Options } from "./Options";
import { CategoryProduct } from './CategoryProduct'
import { Favorite } from "./Favorite";
import { Like } from "./Like";

User.hasMany(Address, {foreignKey: 'users_id'})
Address.belongsTo(User, {foreignKey: 'id'})

User.hasMany(Cart)
Cart.belongsTo(User)
CartItems.hasMany(Product, {foreignKey:'id'})
Product.belongsTo(CartItems, {foreignKey:'id'})

Product.belongsToMany(User, {through: Favorite})
Product.belongsToMany(User, {through: Like})
Product.hasMany(Favorite, {as: 'favoriteUsers', foreignKey:'product_id'})

User.belongsToMany(Product, {through: Favorite})
User.belongsToMany(Product, {through: Like})
User.hasMany(Favorite, {as: 'favoriteProducts', foreignKey:'user_id'})

Favorite.belongsTo(User)
Favorite.belongsTo(Product)

Product.hasMany(Ask)
Ask.belongsTo(Product)
Product.hasMany(Visit)
Product.hasMany(Options)
Options.belongsTo(Product)
User.hasMany(Visit)
Visit.belongsTo(Product)
Visit.belongsTo(User)

Product.belongsToMany(Category, {through: CategoryProduct})
Product.hasMany(CategoryProduct, {as: 'prodcat', foreignKey: 'product_id'})

CategoryProduct.belongsTo(Product)
CategoryProduct.belongsTo(Category)

Category.belongsToMany(Product, {through: CategoryProduct})
Category.hasMany(CategoryProduct, {as: 'catprod', foreignKey: 'category_id'})



// Category.hasMany(CategoryProduct, {as:'catproducts'})
// CategoryProduct.belongsTo(Category)
// Product.hasMany(CategoryProduct, {as: 'product'})
// CategoryProduct.belongsTo(Product)


export {
    User, 
    Address,
    Product,
    Options,
    Category,
    CategoryProduct,
    Cart,
    CartItems,
    Ask,
    Visit,
    Favorite,
    Like
}