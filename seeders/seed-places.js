const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml.jpg',
    founded: 1989,
    srcName: "Trip101",
    srcUrl: "https://trip101.com/article/fancy-restaurants-in-las-vegas"
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat-cafe.jpg',
    founded: 2020,
    srcName: 'Ecurrent',
    srcUrl: "https://www.ecurrent.com/news/were-getting-a-cat-cafe/"
}])
    .then(() => process.exit())
    .catch(err => {
        console.log(err)
        process.exit()
    })
