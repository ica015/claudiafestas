import { ResourceOptions } from "adminjs";

export const PixResourceptions: ResourceOptions = {
    actions:{
        new:{

        }
    },
    navigation: "Administração",
    listProperties: ['id','pixkey','main'],
    editProperties: ['pixkey','main'],
    filterProperties: ['pixkey','main'],
    showProperties: ['id','pixkey','main','createdAt', 'updatedAt'],
}