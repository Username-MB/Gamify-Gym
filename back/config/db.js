import mysql from 'mysql2/promise';
import { configDotenv } from 'dotenv';
configDotenv();
const db = mysql.createPool({
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    waitForConnections:true,
    queueLimit:0,
    connectionLimit:15,
    timezone:'local',
    charset:'utf8mb4_unicode_ci'
});
export default db;