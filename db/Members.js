const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
  fname: String,
  lname: String,
  street: String,
  city: String,
  zip: Number,
  phone: Number,
  email: String,
  school: String,
  classes: Array,
  created_at: Date,
  updated_at: Date
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member
