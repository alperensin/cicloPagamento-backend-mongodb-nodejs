const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance', {useNewUrlParser: true, useUnifiedTopology: true});