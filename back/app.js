import { configDotenv } from 'dotenv';
import express from 'express'
import cors from 'cors';
configDotenv();

const app = express();
app.use(cors())


const host = process.env.APPHOST || 'localhost';
const port = process.env.APPPORT || '5000';

app.listen(port,()=>{
    console.log(`http://${host}:${port}`);
})