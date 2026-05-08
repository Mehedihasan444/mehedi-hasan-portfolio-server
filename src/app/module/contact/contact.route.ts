import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ContactControllers } from './contact.controller';
import { ContactValidation } from './contact.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ContactValidation.sendMessageValidationSchema),
  ContactControllers.sendMessage
);

export const ContactRoutes = router;
