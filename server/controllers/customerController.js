const { Customer } = require('../models');

module.exports.addCustomer = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Customer.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
},

module.exports.deleteCustomer = async (req, res, next) => {
    try {
        const { params:{customerId} } = req;
        const rowsCount = await Customer.findOneAndDelete({ _id: customerId });
        if(rowsCount) {
            return res.status(200).send('Succesfull delete!');
        } else {
            return res.status(404);
        }
    } catch (error) {
        next(error);
    }
}