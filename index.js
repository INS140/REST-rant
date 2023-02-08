require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send(`<h1>HELLO!!!!</h1>`)
})

app.get('*', (req, res) => res.status(404).send(`<h1>oops ... something went wrong!</h1>`))

app.listen(process.env.PORT)