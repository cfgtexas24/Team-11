const mongoose = require('mongoose'); //to interact w mongod
//fields the user model will have
const apointmentModel = mongoose.Schema({
    appointmentType: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('appointments', appointmentModel)