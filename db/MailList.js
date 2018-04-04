const mongoose = require('mongoose')
const Schema = mongoose.Schema


const emailList = new Schema({
  name: String,
  lCase_name: String,
  email: String
});

module.exports = mongoose.model('EmailList', emailList);
