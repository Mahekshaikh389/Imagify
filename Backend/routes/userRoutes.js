import express from 'express'
import {registerUser, loginUser, userCredits} from '../controller/userController.js'
import userAuth from '../middlewares/auth.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/credits', userAuth, userCredits);
// userRoute.post('/pay-razor', userAuth, paymentRazorpay);

export default userRoute;