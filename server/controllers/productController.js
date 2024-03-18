const { Product } = require('../models');

module.exports.addProduct = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Product.create({...body});
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteProduct = async(req, res, next) => {
    try {
        const { params:{productId} } = req;
        const deleted = await Product.findByIdAndDelete({ _id: productId });
        if(!deleted) {
            return res.status(400).send('The product is not found!');
        }
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
};

module.exports.updateProduct = async (req, res, next) => {
    try {
        const {body, params:{productId} } = req;
        const updated = await Product.findByIdAndUpdate({ _id: productId }, {...body}, {returnDocument: 'after'});
        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
}

