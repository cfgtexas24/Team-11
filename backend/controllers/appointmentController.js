const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');

const setAppointment = asyncHandler(async (req, res) => {
    const { clinicName, date, time, physician, type } = req.body;
    const userId = req.params.userId; // Get userId from URL params

    if (!clinicName || !date || !time || !physician || !type) {
        res.status(400);
        throw new Error('Please fill in all required fields');
    }
    // Create the appointment
    const appointment = new Appointment({
        clinicName,
        date,
        time,
        physician,
        type,
    });

    const createdAppointment = await appointment.save();

    // Find the user and add the appointment
    const user = await User.findById(userId);
    if (user) {
        user.appointments.push(createdAppointment._id);
        await user.save();

        res.status(201).json({
            message: 'Appointment successfully created and linked to user',
            appointment: createdAppointment,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }

});



const getAppointments = asyncHandler(async (req, res) => {
    // Get user ID from the authenticated request
    const userId = req.params.userId;

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
