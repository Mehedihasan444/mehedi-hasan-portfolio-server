
import express from 'express';
import { ExperienceControllers } from './experience.controller';
const router=express.Router();

router.get('/',ExperienceControllers.getExperiences);
router.post('/',ExperienceControllers.createExperience)
router.get('/:id',ExperienceControllers.getExperience);
router.put('/:id',ExperienceControllers.updateExperience);
router.delete('/:id',ExperienceControllers.deleteExperience);
export const ExperienceRoutes=router;