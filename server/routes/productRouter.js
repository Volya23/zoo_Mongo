const {Router} = require('express');
const ProductController = require('../controllers/productController');

const productRouter = Router();

productRouter.post('/', ProductController.addProduct);
//userRouter.post('/login', UserController.loginUser);

module.exports = productRouter;