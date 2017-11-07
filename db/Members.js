const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const memberSchema = new Schema({
  fname: String,
  lname: String,
  street: String,
  city: String,
  zip: Number,
  phone: Number,
  email: String,
  username: String,
  password: String,
  school: String,
  classes: Array,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date,
  account_active: {
    type: Boolean,
    default: false
  },
  paid_next_year: {
    type: Boolean,
    default: false
  },
  lifetime_members: Boolean
})


memberSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Member', memberSchema)
