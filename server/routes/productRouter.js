const productRouter = require('express').Router({mergeParams:true});
const ProductController = require('../controllers/productController');
const {createImages} = require('../middlewares/addImages');
const {STATIC_PATH} = require('../configs/path.config');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({ storage }) 


productRouter
.post('/', upload.array('images'), createImages, ProductController.addProduct);

productRouter
.patch('/:productId', upload.array('images'), createImages, ProductController.updateProduct)
.delete('/:productId', ProductController.deleteProduct);

module.exports = productRouter;