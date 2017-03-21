/**
 * Created by Danang Aji Tamtomo on 3/21/17.
 */
var User = require('../models/User')

var UserController = {}

UserController.getUsers = function (req, res, next) {
  User.find({})
    .then(function (users) {
      res.send(users)
    })
}

UserController.getUser = function (req, res, next) {
  User.find({id: req.params.id})
    .then(function (user) {
      res.send(user)
    })
}

UserController.createUser = function (req, res, next) {
  var user = new User(req.body)
  user.save()
    .then(function (user) {
      res.send({
        status: 'Ok',
        message: 'New user has been created',
        user: user
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

UserController.updateUser = function (req, res, next) {
  User.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, user) {
      res.send({
        status: 'Ok',
        message: `${req.body.fullname} has been updated`,
        updated_user: user
      })
    })
}

UserController.deleteUser = function (req, res, next) {
  User.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: 'The user has been deleted'
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

module.exports = UserController
