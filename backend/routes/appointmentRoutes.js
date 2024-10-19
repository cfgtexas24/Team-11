const express = require('express');
const { setAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Route to create an appointment for a user
router.post('/users/:userId/appointments', setAppointment);

// Route to get appointments for a user
router.get('/users/:userId/appointments', getAppointments);

module.exports = router;
