import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const ProductResourcesOptions: ResourceOptions = {
    navigation: "Cadastro de Produtos",
    editProperties: ['nome','destaque','uploadImagem','descricao','variacao','precoAntigo','precoNovo','qtdeMinima','qtdeEstoque','ativo'],
    listProperties: ['nome', 'variacao','qtdeEstoque', 'qtdeMinima','destaque','ativo'],
    filterProperties: ['nome', 'destaque', 'ativo'],
    showProperties: ['id', 'nome', 'imagemUrl', 'variacao','precoAntigo','precoNovo','qtdeEstoque', 'qtdeMinima','destaque','createdAt','updatedAt']
}

export const productResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider:{
            local:{
                bucket: path.join(__dirname, '..','..','..','uploads')
            }
        },
        properties:{
            key: 'imagemUrl',
            file: 'uploadImagem'
        },
        uploadPath: (record, filename) => `imagens/produto-${record.get('id')}/${filename}`
    })
]
