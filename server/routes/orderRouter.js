const orderRouter = require('express').Router({mergeParams:true});
const OrderController = require('../controllers/orderController');
const { findProduct } = require('../middlewares/getProductFromOrder');
const { createImages } = require('../middlewares/addImages');
const { STATIC_PATH } = require('../configs/path.config');
const multer  = require('multer');

// const upload = multer({ dest: path.resolve(__dirname, '../public/images') });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({ storage })


orderRouter
.post('/', findProduct, upload.array('images'), createImages, OrderController.createOrder);

orderRouter.get('/:orderId', OrderController.getOrder);
orderRouter.patch('/:orderId', findProduct, upload.array('images'), createImages, OrderController.updateOrder);
orderRouter
.delete('/:orderId', OrderController.deleteOrder);

module.exports = orderRouter;