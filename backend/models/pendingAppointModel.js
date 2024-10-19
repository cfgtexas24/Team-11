const mongoose = require('mongoose'); //to interact w mongod
//fields the user model will have
const pendingAppointmentModel = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
        required: true,
    },
    time: {
        type: Date,  
        default: () => new Date()
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
    status: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('pendingAppointment', pendingAppointmentModel)