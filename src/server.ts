import express from 'express';
import { database } from './database';
import { adminjs, adminJsRouter } from './config/adminJs';


const app = express();

app.use(express.static('public'));
app.use(adminjs.options.rootPath, adminJsRouter);
const PORT = process.env.port || 3000;

app.listen(PORT, async ()=>{
    await database.authenticate().then(()=>{
        console.log("BD conectado com sucesso.")
    })
    console.log(`Servidor inciado com sucesso na porta ${PORT}`)
})