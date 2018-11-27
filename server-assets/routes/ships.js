let router = require('express').Router()
let Ships = require('../models/ship')

//get all
router.get('/api/ships', (req, res, next) => {
  Ships.find({})
    .then(ships => {
      res.status(200).send(ships)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//get by ID
router.get('/api/ships/:id', (req, res, next) => {
  Ships.findById(req.params.id)
    .then(ship => {
      res.status(200).send(ship)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//post
router.post('/api/ships', (req, res, next) => {
  let ship = req.body
  Ships.create(ship)
    .then(newShip => {
      res.status(200).send(newShip)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/api/ships/:id', (req, res, next) => {
  Ships.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(ship => {
      res.status(200).send({ message: "Successfully Updated", ship })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/ships/:id', (req, res, next) => {
  Ships.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send('Successfully Deleted Ship')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}