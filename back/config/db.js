import mysql from 'mysql2/promise';
import { configDotenv } from 'dotenv';
configDotenv();
const db = mysql.createPool({
    host:process.env.HOST,
    password:process.env.PASSWORD,
    user:process.env.USER,
    database:process.env.DATABASE,
    port:process.env.PORT,
    waitForConnections:true,
    queueLimit:0,
    connectionLimit:15,
    timezone:'local',
    charset:'utf8mb4_unicode_ci'
});
export default db;