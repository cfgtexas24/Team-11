const express = require('express');
const { setAppointmentPending } = require('../controllers/pendingAppointmentController');
const { setAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Route to create an appointment for a user
router.post('/:userId/appointments', setAppointment);

// Route to get appointments for a user
router.get('/:userId/appointments', getAppointments);


module.exports = router;
