const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const UserDataModel = mongoose.model('log_reg_form', UserDataSchema);

module.exports = UserDataModel;