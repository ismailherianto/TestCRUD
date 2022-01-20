import { Sequelize } from "sequelize/dist";

const db = new Sequelize('perpus','root','168168168kmg',{
    host : "localhost",
    dialect : "mysql"
});

export default db;