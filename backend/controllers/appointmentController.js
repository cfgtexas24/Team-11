const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');

const setAppointment = asyncHandler(async (req, res) => {
    const { clinicName, date, time, physician, type } = req.body;
    
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

const getAppointments = asyncHandler(async (req, res) => {
    // Get user ID from the authenticated request
    const userId = req.user._id;

    // Find the user and populate the appointments field with the actual appointment documents
    const userWithAppointments = await User.findById(userId).populate('appointments');

    if (userWithAppointments) {
        res.json(userWithAppointments.appointments);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});




module.exports = {
    setAppointment, getAppointments
};
