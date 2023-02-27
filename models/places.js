const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, default: 'Somewhere'},
  state: {type: String, default: 'USA'},
  founded: {
    type: Number,
    min: [803, "The oldest restaraunt was built in 803, try again!"],
    max: [new Date().getFullYear(), 'Restaraunts from the future are not valid ... yet.']
  },
  cuisines: {type: String, required: true},
  pic: {type: String, default: '/images/default-restaurant.png'},
  srcName: String,
  srcUrl: String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}



module.exports = mongoose.model('Place', placeSchema)