const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,
  price: Number
});

module.exports = mongoose.model('Stocks', stockSchema);
