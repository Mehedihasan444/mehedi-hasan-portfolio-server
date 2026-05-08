
import express from 'express';
import { SkillControllers } from './skill.controller';
import { requireAdmin } from '../../middleware/requireAdmin';
const router=express.Router();

router.get('/', SkillControllers.getSkills);
router.post('/', requireAdmin, SkillControllers.createSkill)
router.get('/:id', SkillControllers.getSkill);
router.put('/:id', requireAdmin, SkillControllers.updateSkill);
router.delete('/:id', requireAdmin, SkillControllers.deleteSkill);


export const SkillRoutes=router;