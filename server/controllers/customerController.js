const { Customer } = require('../models');

module.exports.addCustomer = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Customer.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
}