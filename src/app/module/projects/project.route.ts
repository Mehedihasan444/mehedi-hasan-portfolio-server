
import express, { NextFunction, Request, Response } from 'express';
import { ProjectControllers } from './project.controller';
import { upload } from '../../utils/sendImageToCloudinary';
import { requireAdmin } from '../../middleware/requireAdmin';
const router = express.Router();


router.get('/', ProjectControllers.getProjects);
router.post('/', requireAdmin, upload.array("images", 4),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    }
    , ProjectControllers.createProject)
router.get('/:id', ProjectControllers.getProject);
router.put('/:id', requireAdmin, ProjectControllers.updateProject);
router.delete('/:id', requireAdmin, ProjectControllers.deleteProject);




export const ProjectRoutes = router;