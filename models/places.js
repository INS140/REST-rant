const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, default: 'Somewhere'},
  state: {type: String, default: 'USA'},
  founded: Number,
  cuisines: {type: String, required: true},
  pic: {type: String, default: '/images/default-restaurant.png'},
  srcName: String,
  srcUrl: String
})

module.exports = mongoose.model('Place', placeSchema)