/**
 * Created by hacktiv8 on 3/21/17.
 */
/**
 * Created by Danang Aji Tamtomo on 3/21/17.
 */
var House = require('../models/House')

var HouseController = {}

HouseController.getHouses = function (req, res, next) {
  House.find({})
    .then(function (houses) {
      res.send(houses)
    })
}

HouseController.getHouse = function (req, res, next) {
  House.find({id: req.params.id})
    .then(function (house) {
      res.send(house)
    })
}

HouseController.createHouse = function (req, res, next) {
  var house = new House(req.body)
  house.save()
    .then(function (house) {
      res.send({
        status: 'Ok',
        message: 'New house has been created',
        house: house
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

HouseController.updateHouse = function (req, res, next) {
  House.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, house) {
      res.send({
        status: 'Ok',
        message: 'The house has been updated',
        updated_house: house
      })
    })
}

HouseController.deleteHouse = function (req, res, next) {
  House.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: 'The house has been deleted'
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}

module.exports = HouseController
