const express = require('express')
const router = express.Router()

const {loginUser, getUsers, addUser, updateUser} = require('../controllers/userController')

router.route('/login').post(loginUser)
router.route('/add_user').post(addUser)
router.route('/').get(getUsers)
router.route('/updateUser/:id').put(updateUser);  // <--- Update user info by ID
//router.post('/users/makeAppointment').get(setAppointmentPending)

module.exports = router

