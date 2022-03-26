// contactModel.js
const mongoose = require("mongoose");
//setup schema
const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export Contact Model
const Contact = (module.exports = mongoose.model(
  "ContactSchema",
  ContactSchema
));
module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
};
