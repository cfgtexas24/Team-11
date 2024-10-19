const mongoose = require('mongoose'); //to interact w mongodb
//fields the user model will have
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        default: null
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        default: null
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        default: null
    },
    phone: {
        type: String,
        required: false,
        default: null
    },
    addressLine1: {
        type: String,
        required: false,
        default: null
    },
    addressLine2: {
        type: String,
        required: false,
        default: null
    },
    city: {
        type: String,
        required: false,
        default: null
    },
    zipCode: {
        type: String,
        required: false,
        default: null
    },
    height: {
        type: String,
        required: false,
        default: null
    },
    weight: {
        type: String,
        required: false,
        default: null
    },
    numberPastPregnancies: {
        type: String,
        required: false,
        default: null
    },
    allergies: {
        type: String,
        required: false,
        default: null
    },
    currentMedications: {
        type: String,
        required: false,
        default: null
    },
    previousMedication: {
        type: String,
        required: false,
        default: null
    },
    familyMedicalHistory: {
        type: String,
        required: false,
        default: null
    },
    previousMedicalProcedures: {
        type: String,
        required: false,
        default: null
    },
    state: {
        type: String,
        required: false,
        default: null
    },
    dateOfBirth: {
        type: Date,
        required: false,
        default: null
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
        default: null
    },
    homlessness:{
        type:Boolean,
    },
    preeclampsia:{
        type:Boolean,
    },
    postpartumdepression:{
        type:Boolean,
    },
        
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('users', userSchema)