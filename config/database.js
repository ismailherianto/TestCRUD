import mysql from "mysql2";

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '168168168kmg',
    database : 'perpus'
})

export default db.connect;