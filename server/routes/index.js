const rootRouter = require('express').Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const customerRouter = require('./customerRouter');
//const orderRouter = require('./orderRouter');

rootRouter.use('/users', userRouter);
rootRouter.use('/products', productRouter);
rootRouter.use('/customers', customerRouter);
//rootRouter.use('/orders', orderRouter);


module.exports = rootRouter;
