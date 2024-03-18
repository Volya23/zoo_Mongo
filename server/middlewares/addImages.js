const { Product } = require('../models');

module.exports.createImages = async (req, res, next) => {
    try {
        const {params: {productId}, files} = req;
        
        const product = await Product.findById(productId);
        
        if(product) {
            if(product.images) {
                if(files) {
                    product.images = product.images.concat(files.map((file) => file.filename));
                }
            }
        } else {
            let images = [];
            if(files) {
                images = files.map((file) => file.filename);
            }
            if(product) {
                product.images = images;
            }
        }

        if(product) {
            req.body = { ...req.body, images: product.images }
        } else {
            req.body = { ...req.body, images: [] }
        }

        next();
    } catch (error) {
        next(error);
    }
}