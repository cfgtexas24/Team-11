const mongoose = require('mongoose'); //to interact w mongodb
//fields the user model will have
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false,
        //required: [true, 'Please add a name'],
    },
    lastName: {
        type: String,
        required: false,
        //required: [true, 'Please add a name'],
    },
    middleInitial: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
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
    allergies: [{
        type: String,
        required: false
    }],
    currentMedications: [{
        type: String,
        required: false
    }],
    previousMedication: [{
        type: String,
        required: false
    }],
    familyMedicalHistory: [{
        type: String,
        required: false
    }],
    previousMedicalProcedures: [{
        type: String,
        required: false
    }],
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
        enum: [
            "Caucasian",
            "African",
            "Asian",
            "Hispanic",
            "Arab",
            "Indigenous",
            "Pacific Islander",
            "Mixed Race"
          ],
          
        default: 'user',
    },
    ethnicity: {
        type: String,
        enum: [
            "Hispanic or Latino",
            "Non-Hispanic White",
            "Black or African American",
            "Asian",
            "Native American or Alaska Native",
            "Native Hawaiian or Other Pacific Islander",
            "Middle Eastern or North African",
            "Mixed Race",
            "Other"
          ],
          default: null
    },
    race: {
        type: String,
        enum: [
            "Caucasian",
            "African",
            "Asian",
            "Hispanic",
            "Arab",
            "Indigenous",
            "Pacific Islander",
            "Mixed Race"
          ],
          default: null
    },
    homlessness:{
        type:Boolean,
        default: false
    },
    preeclampsia:{
        type:Boolean,
        default: false
    },
    postpartumdepression:{
        type:Boolean,
        default: false
    },
        
},{
    timestamps: true //adds created at and updated at fields
})

module.exports = mongoose.model('users', userSchema)