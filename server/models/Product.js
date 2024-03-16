const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    name: { 
        type: String,
        required: true
    },

    images: {
        type: Array
    },

    category: {
        type: String
    },

    description: {
        type: String
    },

    price: {
        type: Number
    },

    rating: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;