const mongoose = require('mongoose');
const router = require('../controllers/listings');

const listingSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  size: {
    type: Number,
    required: true,
    min: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  favoritedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

});


const Listing = mongoose.model('Listing', listingSchema);


module.exports = Listing;