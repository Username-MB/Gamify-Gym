import { configDotenv } from 'dotenv';
import express from 'express'
import router from './routes/default.js';
import cors from 'cors';
configDotenv();

const app = express();
app.use(cors())


const host = process.env.APPHOST || 'localhost';
const port = process.env.APPPORT || '5000';

app.get('/',(req,res)=>{
    res.send('<h1>Servidor Ligado!</h1>')
})

app.use('/api',router);

app.listen(port,()=>{
    console.log(`https://${host}:${port}`);
})