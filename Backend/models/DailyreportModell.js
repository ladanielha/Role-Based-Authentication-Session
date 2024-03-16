import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Projects from "./ProjectsModel.js";

const {DataTypes} = Sequelize;

const Daliyreport = db.define('db_daily_report',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    code_report: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    division: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    worker: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    start_hour: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    end_hour: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    weather: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    material: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    tool: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    instruction: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_by:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Daliyreport.belongsTo(Users, {foreignKey: 'created_by'});
Daliyreport.belongsTo(Projects, {foreignKey: 'project_id'});

export default Daliyreport;