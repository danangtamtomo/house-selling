/**
 * Created by Danang Aji Tamtomo on 3/21/17.
 */
/**
 * Created by Danang Aji Tamtomo on 3/21/17.
 */
var mongoose = require('mongoose')

var houseSchema = mongoose.Schema({
  name: String,
  address: String,
  house_specification: String,
  price: Number,
  lat: String,
  long: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

var House = mongoose.model('House', houseSchema)

module.exports = House
