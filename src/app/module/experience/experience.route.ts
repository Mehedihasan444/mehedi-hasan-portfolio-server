
import express from 'express';
import { ExperienceControllers } from './experience.controller';
import { requireAdmin } from '../../middleware/requireAdmin';
const router=express.Router();

router.get('/',ExperienceControllers.getExperiences);
router.post('/', requireAdmin, ExperienceControllers.createExperience)
router.get('/:id',ExperienceControllers.getExperience);
router.put('/:id', requireAdmin, ExperienceControllers.updateExperience);
router.delete('/:id', requireAdmin, ExperienceControllers.deleteExperience);
export const ExperienceRoutes=router;