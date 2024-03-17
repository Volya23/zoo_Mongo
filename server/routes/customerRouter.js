const customerRouter= require('express').Router({mergeParams:true});

const CustomerController = require('../controllers/customerController');


customerRouter
.route('/')
.post(CustomerController.addCustomer);

customerRouter
.route('/:customerId')
.delete(CustomerController.deleteCustomer)
.patch(CustomerController.updateCustomer);
module.exports = customerRouter;