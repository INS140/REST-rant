const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// CREATE
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = '/images/default-restaurant.png'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
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

// EDIT
router.get('/:id/edit', (req, res) => {
  res.render('places/edit', { place: places[req.params.id] })
})

module.exports = router