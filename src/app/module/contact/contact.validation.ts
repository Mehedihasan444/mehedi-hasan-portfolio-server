import { z } from 'zod';

const sendMessageValidationSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name is required').max(100),
    email: z.string().email('Valid email is required'),
    subject: z.string().min(3, 'Subject is required').max(150),
    message: z.string().min(10, 'Message is too short').max(2000),
  }),
});

export const ContactValidation = {
  sendMessageValidationSchema,
};
