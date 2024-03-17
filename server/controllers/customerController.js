const { Customer } = require('../models');

module.exports.addCustomer = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Customer.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteCustomer = async (req, res, next) => {
    try {
        const { params:{customerId} } = req;
        const deleted = await Customer.findByIdAndDelete({ _id: customerId });
        if(!deleted) {
            return res.status(400).send('The customer is not found!');
        }
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
};

module.exports.updateCustomer = async(req, res, next) => {
    try {
        const {body, params:{customerId} } = req;
        const updated = await Customer.findByIdAndUpdate({ _id: customerId }, {...body}, {returnDocument: 'after'});
        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
}