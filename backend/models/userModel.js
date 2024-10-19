const mongoose = require('mongoose'); //to interact w mongodb
//fields the user model will have
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true 
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    phone: {
        type: String,
        required: false,
    },
    addressLine1: {
        type: String,
        required: false,
    },
    addressLine2: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    zipCode: {
        type: String,
        required: false,
    },
    outerHeight: {
        type: String,
        required: false,
    },
    weight: {
        type: String,
        required: false,
    },
    numberPastPregnancies: {
        type: String,
        required: false,
    },
    allergies: {
        type: String,
        required: false,
    },
    currentMedications: {
        type: String,
        required: false,
    },
    previousMedication: {
        type: String,
        required: false,
    },
    familyMedicalHistory: {
        type: String,
        required: false,
    },
    previousMedicalProcedures: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
      appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment', 
    }],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    role: {
        type: String,
        enum: ['user', 'admin', 'provider'],
        default: 'user',
    },
    middleInitial: {
        type: String,
    },
        
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('users', userSchema)