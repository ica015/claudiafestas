import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const ProductResourcesOptions: ResourceOptions = {
    navigation: "Manutenção de Produtos",
    properties:{
        description:{
            type:'richtext'
        }
    },
    editProperties: ['name','featured','uploadImage','description','active'],
    listProperties: ['id','name', 'featured','active'],
    filterProperties: ['id','name', 'featured', 'active'],
    showProperties: ['id', 'name', 'imageUrl','description', 'featured', 'active','createdAt','updatedAt']
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
            file: 'uploadImage',
        },
        //multiple: true,
        uploadPath: (record, filename) => `imagens/produto-${record.get('id')}/${filename}`
    })
]
