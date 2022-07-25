import AdminJs from "adminjs";
import AdminJsExpress from '@adminjs/express';
import AdminjsSequelize from '@adminjs/sequelize';
import { database } from "../database";
import { AdminJsResources } from "../adminjs/resources";
import { locale } from "../adminjs/locale";
import { dashboardOptions } from "../adminjs/dashboard";
import { brandingOptions } from "../adminjs/branding";
import { authenticatorOptions } from "../adminjs/authenticator";

AdminJs.registerAdapter(AdminjsSequelize)

export const adminjs = new AdminJs({
    databases:[database],
    resources: AdminJsResources,
    rootPath: '/meuadmin',
    locale: locale,
    loginPath: '/meuadmin/login',
    logoutPath: '/meuadmin/logout',
    dashboard: dashboardOptions,
    branding:brandingOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminjs,
    authenticatorOptions,
    null,
    {
        resave: false,
        saveUninitialized: false
    }
)