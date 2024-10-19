const mongoose = require('mongoose'); //to interact w mongod
//fields the user model will have
const apointmentModel = mongoose.Schema({
    clinicName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,  
        required: true,
    },
    physician: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['prenatal care', 'checkup', 'follow-up'], // Dropdown options
        required: true,
    },
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('appointments', appointmentModel)