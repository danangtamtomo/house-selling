/**
 * Created by hacktiv8 on 3/21/17.
 */
var mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_COLLECTION}`)
var db = mongoose.connection

module.exports = db