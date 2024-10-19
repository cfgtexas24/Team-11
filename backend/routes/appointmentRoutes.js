<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const {setAppointment, getAppointments} = require('../controllers/appointmentController')
=======
const express = require('express');
const { setAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Route to create an appointment for a user
router.post('/users/:userId/appointments', setAppointment);

// Route to get appointments for a user
router.get('/users/:userId/appointments', getAppointments);

module.exports = router;
>>>>>>> 364def6fe777818af2a87d13c033dec79d8d5dee
