const mongoose = require('mongoose');
const { DB } = require('../configs/db');

mongoose.connect(DB)
.catch(err => {
    console.log('connect failed');
    process.exit(1);
})