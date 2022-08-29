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
import { Purchases } from "./Purchase";
import { PurchaseItems } from "./PurchaseItem";

User.hasMany(Address, {as:'Address', foreignKey: 'user_id'})
Address.belongsTo(User)

User.hasMany(Cart)
Cart.belongsTo(User)
Product.hasMany(CartItems, {as: 'productCartItem', foreignKey: 'product_id'})
CartItems.belongsTo(Product)

Cart.hasMany(CartItems, {as:'cartitems'})
// CartItems.belongsTo(Cart, {foreignKey: 'cart_id'})

//Product.belongsToMany(Cart, {through: CartItems, as: 'productDetails'})
Cart.belongsToMany(Product, {through: CartItems})

Cart.belongsToMany(Options, {through: CartItems, as:'cartoptions'} )
Options.belongsToMany(Cart, {through: CartItems, as:'optionscart'} )

Options.hasMany(CartItems, {as: 'optionscartitems', foreignKey:'option_id'})
CartItems.belongsTo(Options)

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
Product.hasMany(Options, {as: 'optional'})
Options.belongsTo(Product, {foreignKey:'product_id', as:'optionsproduct'})
User.hasMany(Visit)
Visit.belongsTo(Product)
Visit.belongsTo(User)

Product.hasMany(CategoryProduct, {as: 'productcategories', foreignKey: 'product_id'})

CategoryProduct.belongsTo(Product)
CategoryProduct.belongsTo(Category)

Category.hasMany(CategoryProduct, {as: 'categoryproducts', foreignKey: 'category_id'})

// Purchases.hasOne(User)
// Purchases.hasOne(Cart)
// Purchases.hasOne(Address)
Purchases.hasMany(PurchaseItems, {as:'purchaseItems'})
// User.belongsTo(Purchases)
// Cart.belongsTo(Purchases)
// Address.belongsTo(Purchases)
PurchaseItems.belongsTo(Purchases)



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
    Like,
    Purchases,
    PurchaseItems
}