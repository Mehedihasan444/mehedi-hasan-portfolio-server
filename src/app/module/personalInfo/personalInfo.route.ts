
import express from 'express';
import { PersonalInfoControllers } from './personalInfo.controller';
import { requireAdmin } from '../../middleware/requireAdmin';


const router = express.Router();


router.get('/', PersonalInfoControllers.getPersonalInfos);
router.post('/', requireAdmin, PersonalInfoControllers.createPersonalInfo)
router.get('/:id', PersonalInfoControllers.getPersonalInfo);
router.put('/:id', requireAdmin, PersonalInfoControllers.updatePersonalInfo);
router.delete('/:id', requireAdmin, PersonalInfoControllers.deletePersonalInfo);



export const PersonalInfoRoutes = router;