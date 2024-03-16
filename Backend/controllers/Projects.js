import Project from "../models/ProjectsModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProjects = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Project.findAll({
                attributes:['uuid','code_project', 'project_name', 'project_bundle', 'project_location', 'project_image', 'created_by'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Project.findAll({
                attributes:['uuid','code_project', 'project_name', 'project_bundle', 'project_location', 'project_image', 'created_by'],
                where:{
                    created_by: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProjectById = async(req, res) =>{
    try {
        const project = await Project.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!project) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Project.findOne({
                attributes:['uuid','name','price'],
                where:{
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Project.findOne({
                attributes:['uuid','name','price'],
                where:{
                    [Op.and]:[{id: project.id}, {created_by: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProject = async(req, res) =>{
    const {code_project, project_name, project_bundle, project_location, project_image,} = req.body;
    try {
        await Project.create({
            code_project,
            project_name, 
            project_bundle, 
            project_location, 
            project_image, 
            created_by : req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// export const updateProduct = async(req, res) =>{
//     try {
//         const product = await Product.findOne({
//             where:{
//                 uuid: req.params.id
//             }
//         });
//         if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
//         const {name, price} = req.body;
//         if(req.role === "admin"){
//             await Product.update({name, price},{
//                 where:{
//                     id: product.id
//                 }
//             });
//         }else{
//             if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
//             await Product.update({name, price},{
//                 where:{
//                     [Op.and]:[{id: product.id}, {userId: req.userId}]
//                 }
//             });
//         }
//         res.status(200).json({msg: "Product updated successfuly"});
//     } catch (error) {
//         res.status(500).json({msg: error.message});
//     }
// }

// export const deleteProduct = async(req, res) =>{
//     try {
//         const product = await Product.findOne({
//             where:{
//                 uuid: req.params.id
//             }
//         });
//         if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
//         const {name, price} = req.body;
//         if(req.role === "admin"){
//             await Product.destroy({
//                 where:{
//                     id: product.id
//                 }
//             });
//         }else{
//             if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
//             await Product.destroy({
//                 where:{
//                     [Op.and]:[{id: product.id}, {userId: req.userId}]
//                 }
//             });
//         }
//         res.status(200).json({msg: "Product deleted successfuly"});
//     } catch (error) {
//         res.status(500).json({msg: error.message});
//     }
// }