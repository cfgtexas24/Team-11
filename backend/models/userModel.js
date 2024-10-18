const mongoose = require('mongoose'); //to interact w mongod
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
    address: {
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
        
},{
    timestamps: true //adds created at and updated at fields
})
