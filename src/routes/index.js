import express from 'express';
import { adminRouter, bookRouter, userRouter } from '@/components';

export const router = express.Router();

adminRouter(router); // all admin routes
userRouter(router); // all user routes
bookRouter(router);

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
