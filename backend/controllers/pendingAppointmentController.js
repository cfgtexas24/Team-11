// const asyncHandler = require('express-async-handler');
// const Appointment = require('../models/pendingAppointmentModel');
// const User = require('../models/userModel');

// const setAppointmentPending = asyncHandler(async (req, res) => {
//     try {
//         const { userId, clinicName, date, time, physician, type, valid } = req.body;

//         // Create a new appointment
//         const appointment = await Appointment.create({
//             userId,
//             clinicName,
//             date,
//             time,
//             physician,
//             type,
//             valid
//         });

//         // Send back the created appointment info including its ID
//         res.status(201).json({
//             _id: appointment._id,
//             userId: appointment.userId,
//             clinicName: appointment.clinicName,
//             time: appointment.time,
//             physician: appointment.physician,
//             type: appointment.type,
//             valid: appointment.valid
//         });
//     } catch (error) {
//         console.error("Error creating appointment:", error);
//         res.status(500).json({ message: 'Failed to create appointment' });
//     }
// });

// const makeAppointment = asyncHandler(async (req, res) => {
//     const { clinicName, date, time, physician, type} = req.body;
// })







// module.exports = {
//     setAppointmentPending
// };