const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    interested_areas: {
        type: [String],
    },
    avatar: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema);