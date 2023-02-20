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
  console.log(req.body, 'init')
  if (!req.body.pic) req.body.pic = undefined
  if (!req.body.city) req.body.city = undefined
  if (!req.body.state) req.body.state = undefined

  console.log(req.body, 'before create')

  db.Place.create(req.body)
    .then(() => res.redirect('/places'))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
  (places[req.params.id])
    ? res.render('places/show', { place: places[req.params.id], id: req.params.id })
    : res.status(404).render('Error404')
})

// DELETE
router.delete('/:id', (req, res) => {
  if (places[req.params.id]) {
    places.splice(req.params.id, 1)
    res.redirect('/places')
  } else {
    res.status(404).render('Error404')
  }
})

// PUT
router.put('/:id', (req, res) => {
  if (!req.body.pic) req.body.pic = '/images/default-restaurant.png'
  if (!req.body.city) req.body.city = 'Somewhere'
  if (!req.body.state) req.body.state = 'USA'

  places[req.params.id] = req.body
  res.redirect(`/places/${req.params.id}`)
})

// EDIT
router.get('/:id/edit', (req, res) => {
  res.render('places/edit', { place: places[req.params.id], id: req.params.id })
})

module.exports = router