import { ResourceWithOptions } from "adminjs";
import { Address, User, Product } from "../models";
import { AddressResourcesOptions } from "./resources/address";
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
    }
]