const mongoose = require('mongoose');
const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const { DB } = require('../configs/db');

mongoose.connect(DB)
.catch(err => {
    console.log('connect failed');
    process.exit(1);
})


module.exports = {
    Customer,
    Product,
    Order
}