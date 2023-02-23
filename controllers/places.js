const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
      .then(places => res.render('places/index', { places }))
      .catch(err => {
        console.log(err)
        res.status(404).render('error404')
      })
})

// CREATE
router.post('/', (req, res) => {
  assignUndefined(req.body)

  db.Place.create(req.body)
    .then(() => res.redirect('/places'))
    .catch(err => {
      console.log(err.errors)
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (const field in err.errors) {
          message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}`
        }
        res.render('places/new', { prevValues: req.body, message })
      } else { res.status(404).render('error404') }
    })
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => res.render('places/show', { place }))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.deleteOne({_id: req.params.id})
    .then(() => res.redirect('/places'))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// PUT
router.put('/:id', (req, res) => {
  assignUndefined(req.body)

  db.Place.updateOne({_id: req.params.id}, {$set: req.body})
    .then(() => res.redirect(`/places/${req.params.id}`))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => res.render('places/edit', { place }))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

function assignUndefined(object) {
  for (const prop in object) if (!object[prop]) {object[prop] = undefined}
}

module.exports = router