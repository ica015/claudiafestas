import { ResourceWithOptions } from "adminjs";
import { Address, User, Product, Category, Cart, Ask, Visit, CartItems } from "../models";
import { CatProduct } from "../models/CatProduct";
import { AddressResourcesOptions } from "./resources/address";
import { AskResourceOptions } from "./resources/ask";
import { CartResourceOptions } from "./resources/cart";
import { CartItemsResourceOptions } from "./resources/cartItems";
import { CategoryResourceOptions } from "./resources/category";
import { catProductsResourceOptions } from "./resources/catproducts";
import { productResourceFeatures, ProductResourcesOptions } from "./resources/product";
import { userResourceOptions } from "./resources/user";
import { VisitResourceOptions } from "./resources/visit";

export const AdminJsResources: ResourceWithOptions[] = [
    {
        resource: User,
        options: userResourceOptions
    },
    {
        resource: Address,
        options: AddressResourcesOptions
    },
    {
        resource: Product,
        options: ProductResourcesOptions,
        features: productResourceFeatures
    },
    {
        resource: Category,
        options: CategoryResourceOptions
    },
    {
        resource: CatProduct,
        options: catProductsResourceOptions
    },
    {
        resource: Cart,
        options: CartResourceOptions
    },
    {
        resource: CartItems,
        options: CartItemsResourceOptions
    },
    {
        resource: Ask,
        options: AskResourceOptions
    },
    {
        resource: Visit,
        options: VisitResourceOptions
    }
]