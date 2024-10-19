const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');

// @desc Authenticate a user
// @route POST /api/login
// @access Public
const setAppointment = asyncHandler(async (req, res) => {
    const { appointmentType, date } = req.body;
    const { userId } = req.params;

    // Find user by email
    const user = await User.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error("User not found")
    }

    const appointment = await Appointment.create({
        appointmentType,
        date
    });

    // Push the new appointment's ID into the user's appointments array
    user.appointments.push(appointment._id);
    await user.save(); // Save the updated user

    res.status(201).json({
        message: 'Appointment added successfully',
        appointment,
    });

});

module.exports = {
    setAppointment,
};
