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

// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/h-thai-ml.jpg',
//     source: 'Trip101',
//     attr: 'https://trip101.com/article/fancy-restaurants-in-las-vegas'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/cat-cafe.jpg',
//     source: 'Ecurrent',
//     attr: 'https://www.ecurrent.com/news/were-getting-a-cat-cafe/'
//   }]