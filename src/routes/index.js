import express from 'express';
import { adminRouter, userRouter } from '@/components';

export const router = express.Router();

userRouter(router); // all user routes
adminRouter(router); // all admin routes

router.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Routes Not Found',
  });
});

router.use((error, req, res) => {
  logger.error(error.message);
  return res.status(500).json({
    success: false,
    message: error.message || 'Internal Server Error',
  });
});
