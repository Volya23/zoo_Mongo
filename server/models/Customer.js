const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema ({
    firstName: { 
        type: String
    },

    lastName: {
        type: String
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(v)
        }
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String
    },
    birthday: {
        type: Date,
        validate: {
            validator: (v) => v < new Date()
        }
    }
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;