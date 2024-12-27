
import express from 'express';
import { PersonalInfoControllers } from './personalInfo.controller';


const router = express.Router();


router.get('/', PersonalInfoControllers.getPersonalInfos);
router.post('/', PersonalInfoControllers.createPersonalInfo)
router.get('/:id', PersonalInfoControllers.getPersonalInfo);
router.put('/:id', PersonalInfoControllers.updatePersonalInfo);
router.delete('/:id', PersonalInfoControllers.deletePersonalInfo);



export const PersonalInfoRoutes = router;