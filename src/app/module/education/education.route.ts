
import express from 'express';
import { EducationControllers } from './education.controller';
import { requireAdmin } from '../../middleware/requireAdmin';
const router = express.Router();

router.get('/', EducationControllers.getEducations);
router.post('/', requireAdmin, EducationControllers.createEducation)
router.get('/:id', EducationControllers.getEducation);
router.put('/:id', requireAdmin, EducationControllers.updateEducation);
router.delete('/:id', requireAdmin, EducationControllers.deleteEducation);

export const EducationRoutes = router;