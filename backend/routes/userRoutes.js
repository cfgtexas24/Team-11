const express = require('express')
const router = express.Router()

const {loginUser, getUsers, addUser} = require('../controllers/userController')

router.route('/login').post(loginUser)
router.route('/add_user').post(addUser)
router.route('/').get(getUsers)

module.exports = router

