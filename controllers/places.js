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
  if (!req.body.pic) req.body.pic = undefined
  if (!req.body.city) req.body.city = undefined
  if (!req.body.state) req.body.state = undefined

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
  // if (places[req.params.id]) {
  //   places.splice(req.params.id, 1)
  //   res.redirect('/places')
  // } else {
  //   res.status(404).render('Error404')
  // }
})

// PUT
router.put('/:id', (req, res) => {
  if (!req.body.pic) req.body.pic = undefined
  if (!req.body.city) req.body.city = undefined
  if (!req.body.state) req.body.state = undefined

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

module.exports = router