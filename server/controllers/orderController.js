const { Order, Product, Customer} = require('../models');

module.exports.createOrder = async (req, res, next) => {
    try {
        const { body, products } = req;

        const order = await Order.create({ ...body, products: [] });
        return res.status(201).send(order);
    } catch (error) {
        next(error);
    }
};

module.exports.getOrder = async (req, res, next) => {
    try {
        const {params: {orderId}} = req;
        const order = await Order.findById(orderId).populate('products');

        return res.status(200).send(order);
    } catch (error) {
        next(error);
    }
};

module.exports.updateOrder = async (req, res, next) => {
    try {
        const {body, products, params: {orderId}} = req;

        const updated = await Order.findByIdAndUpdate(orderId, {...body, products }, {returnDocument: 'after'});
        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteOrder = async (req, res, next) => {
    try {
        const {params: {orderId}} = req;
        const deleted = await Order.findByIdAndDelete(orderId);
        if(!deleted) {
            return res.status(400).send('There is no such order');
        }

        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
};