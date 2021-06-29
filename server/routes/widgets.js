const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/specialists', (req, res) => {
  db.getDoctors()
    .then(doctors => {
      console.log('specialists')
      return null
    })
    .catch(err => console.log(err))
})

module.exports = router
