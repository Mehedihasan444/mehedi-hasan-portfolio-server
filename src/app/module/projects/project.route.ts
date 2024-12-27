
import express from 'express';
import { ProjectControllers } from './project.controller';
const router=express.Router();




router.get('/', ProjectControllers.getProjects);
router.post('/', ProjectControllers.createProject)
router.get('/:id', ProjectControllers.getProject);
router.put('/:id', ProjectControllers.updateProject);
router.delete('/:id', ProjectControllers.deleteProject);




export const ProjectRoutes=router;