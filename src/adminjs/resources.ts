import { ResourceWithOptions } from "adminjs";
import { Address, User, Product, Category, Cart, Ask } from "../models";
import { AddressResourcesOptions } from "./resources/address";
import { AskResourceOptions } from "./resources/ask";
import { CartResourceOptions } from "./resources/cart";
import { CategoryResourceOptions } from "./resources/category";
import { productResourceFeatures, ProductResourcesOptions } from "./resources/product";
import { userResourceOptions } from "./resources/user";

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
        resource: Cart,
        options: CartResourceOptions
    },
    {
        resource: Ask,
        options: AskResourceOptions
    }
]