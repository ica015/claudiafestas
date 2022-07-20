import AdminJs from "adminjs";
import AdminJsExpress from '@adminjs/express';
import AdminjsSequelize from '@adminjs/sequelize';
import { database } from "../database";
import { AdminJsResources } from "../adminjs/resources";
import { User } from "../models";
import bcrypt from 'bcrypt';

AdminJs.registerAdapter(AdminjsSequelize)

export const adminjs = new AdminJs({
    databases:[database],
    resources: AdminJsResources,
    rootPath: '/admin',
    branding:{
        companyName: 'Claudia Festas',
        logo:'/logo.png',
        theme:{
            colors:{
                love: '#ff00cc'
                // primary100:'#ff00cc',
                // grey100:'#999999',
                // grey80:'#eee',
                // // grey60:'#eee',
                // // grey40:'#eee',
                // grey20:'#ff00cc',
                // // grey100:'#ccc',
                // white:'#232323'
            }
        }
    }
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminjs,{
    authenticate: async (email, password) => {
        const user = await User.findOne({where: { email: email } })
        if (user) {
            const matched = await bcrypt.compare(password, user.password)

            if (matched && user.admin){
                return user
            }
        }
        return false
    },
    cookiePassword: 'senha-de-cookie'
},
    null,
    {
        resave: false,
        saveUninitialized: false
    }
)