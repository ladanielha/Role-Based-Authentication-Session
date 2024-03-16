import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Projects = db.define('db_projects',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    code_project: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    project_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_bundle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_image: {
        type: DataTypes.STRING,
        allowNull: false,
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

Projects.belongsTo(Users, {foreignKey: 'created_by'});

export default Projects;