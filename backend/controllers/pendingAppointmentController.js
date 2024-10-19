const asyncHandler = require('express-async-handler');
const Appointment = require('../models/pendingAppointmentModel');
const User = require('../models/userModel');

const setAppointment = asyncHandler(async (req, res) => {
    const { clinicName, date, time, physician, type, valid } = req.body;

    const appointment = await Appointment.create({
        clinicName, 
        date, 
        time, 
        physician, 
        type, 
        valid
    })

    // Send back the created user info
    res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,  // Role-based info
        createdAt: user.createdAt,
    });
    
    const userId = req.user._id;

    if (!clinicName || !date || !time || !physician || !type) {
        res.status(400);
        throw new Error('Please fill in all required fields');
    }

    const appointment = await Appointment.create({
        clinicName,
        date,
        time,
        physician,
        type,
    });

    const createdAppointment = await setAppointment.save();

    const user = await User.findById(userId);
    // If user exists, add the appointment to the user's appointments array
    if (user) {
        user.appointments.push(createdAppointment._id);
        await user.save();  // Save the user with updated appointment reference

        res.status(201).json({
            message: 'Appointment successfully created and linked to user',
            appointment: createdAppointment
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }

});

const makeAppointment = asyncHandler(async (req, res) => {
    const { clinicName, date, time, physician, type} = req.body;
})







module.exports = {
    setAppointment
};
