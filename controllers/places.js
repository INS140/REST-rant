const router = require('express').Router()

router.get('/', (req, res) => {
    const places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml.jpg',
        source: 'Trip101',
        attr: 'https://trip101.com/article/fancy-restaurants-in-las-vegas'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpg',
        source: 'Ecurrent',
        attr: 'https://www.ecurrent.com/news/were-getting-a-cat-cafe/'
      }]
      
    res.render('places/index', { places })
})

module.exports = router