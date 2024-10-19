const express = require('express');
const { setAppointmentPending } = require('../controllers/pendingAppointmentController');
const { setAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Route to create an appointment for a user
router.post('/:userId/appointments', setAppointment);

// Route to get appointments for a user
router.get('/:userId/appointments', getAppointments);

<<<<<<< HEAD


module.exports = router;
=======
module.exports = router;
>>>>>>> 06c3916380e5f995d0076753eb284ee83a51f198
