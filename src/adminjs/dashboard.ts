import AdminJs, { PageHandler } from "adminjs";
import { Ask, Product, User } from "../models";

export const dashboardOptions: {
    handler?: PageHandler
    component?:string
} = {
    component:AdminJs.bundle('./components/Dashboard'),
    handler: async (req, res, context) =>{
        const products = await Product.count({where:{active:true}});
        const standardUsers = await User.count({where:{admin:false}});
        const totalAsks = await Ask.count()
        const asksWithoutResponse = await Ask.count({where:{needAnswer:true}})

        res.json({
            "Produtos Ativos": products,
            "Usuários": standardUsers,
            "Perguntas": totalAsks,
            "Perguntas Sem Resposta": asksWithoutResponse 
        })
    }
}