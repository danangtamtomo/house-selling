var express = require('express')
var router = express.Router()
var UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)
router.get('/',  UserController.getUser)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router