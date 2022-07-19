import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const ProductResourcesOptions: ResourceOptions = {
    navigation: "Cadastro de Produtos",
    editProperties: ['name','featured','uploadImage','description','variation','oldPrice','newPrice','minQuantity','inventoryQuantity','active'],
    listProperties: ['name', 'variation','inventoryQuantity', 'minQuantity','featured','active'],
    filterProperties: ['name', 'featured', 'active'],
    showProperties: ['id', 'name', 'imageUrl', 'variation','oldPrice','newPrice','inventoryQuantity', 'minQuantity','featured','createdAt','updatedAt']
}

export const productResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider:{
            local:{
                bucket: path.join(__dirname, '..','..','..','uploads')
            }
        },
        properties:{
            key: 'imageUrl',
            file: 'uploadImage'
        },
        uploadPath: (record, filename) => `imagens/produto-${record.get('id')}/${filename}`
    })
]
