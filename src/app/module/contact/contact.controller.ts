import httpStatus from 'http-status';
import nodemailer from 'nodemailer';
import AppError from '../../error/AppError';
import config from '../../config';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const sendMessage = catchAsync(async (req, res) => {
  if (!config.sender_email || !config.sender_app_password || !config.admin_email) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Email service is not configured'
    );
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.sender_email,
      pass: config.sender_app_password,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${config.sender_email}>`,
    to: config.admin_email,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message sent successfully',
    data: null,
  });
});

export const ContactControllers = {
  sendMessage,
};
