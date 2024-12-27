
import express from 'express';
import { EducationControllers } from './education.controller';
const router = express.Router();

router.get('/', EducationControllers.getEducations);
router.post('/', EducationControllers.createEducation)
router.get('/:id', EducationControllers.getEducation);
router.put('/:id', EducationControllers.updateEducation);
router.delete('/:id', EducationControllers.deleteEducation);

export const EducationRoutes = router;