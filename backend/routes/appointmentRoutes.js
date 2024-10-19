const express = require('express')
const router = express.Router()

const {setAppointment, getAppointments} = require('../controllers/appointmentController')