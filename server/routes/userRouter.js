const {Router} = require('express');
const UserController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/registration', UserController.registrationUser);
//userRouter.post('/login', UserController.loginUser);

module.exports = userRouter;