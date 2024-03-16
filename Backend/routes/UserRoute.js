import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";
import { verifyUser, adminOnly, managerOnly, adminAndmanager } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, adminAndmanager, getUsers);
router.get('/users/:id', verifyUser, adminAndmanager, getUserById);
router.post('/users',  verifyUser, adminAndmanager, createUser);
router.patch('/users/:id', verifyUser, adminAndmanager, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;