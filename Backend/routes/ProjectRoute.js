import express  from "express";
import { getProjects , createProject} from "../controllers/Projects.js";
import { verifyUser, managerOnly, adminAndmanager} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/projects', verifyUser,getProjects);
// router.get('/projects/:id', verifyUser,getProjects);
router.post('/projects', verifyUser, adminAndmanager, createProject);
// router.patch('/projects/:id', verifyUser,getProjects);
// router.delete('/projects/:id', verifyUser,getProjects);

export default router;