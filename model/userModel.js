const mongoose = require('mongoose')

const myData = new mongoose.Schema({
    name:String,
    email:String
})
module.exports = mongoose.model('mydata',myData)