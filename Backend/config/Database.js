import {Sequelize} from "sequelize";

const db = new Sequelize('wadaw', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    timezone: '+07:00',
    decimalNumbers: true
});

export default db;