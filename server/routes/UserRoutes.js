import express from 'express'
import { clerkWebhooks, getUserAvailableCredits } from '../controllers/UserController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/webhooks', clerkWebhooks);
userRouter.get('/credits', authUser, getUserAvailableCredits)

export default userRouter