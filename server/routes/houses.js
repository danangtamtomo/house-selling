/**
 * Created by Danang Aji Tamotomo on 3/21/17.
 */
var express = require('express')
var router = express.Router()
var HouseController = require('../controllers/HouseController')

router.get('/', HouseController.getHouses)
router.get('/',  HouseController.getHouse)
router.post('/', HouseController.createHouse)
router.put('/:id', HouseController.updateHouse)
router.delete('/:id', HouseController.deleteHouse)

module.exports = router
