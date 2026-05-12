const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  name: String,

  email: String,

  quantity: Number,

  coffee: String,

  price: Number

}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);