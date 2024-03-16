const { Product } = require('../models');

module.exports.addProduct = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Product.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
}
