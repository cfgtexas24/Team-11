const express = require('express')
const router = express.Router()

const {loginUser, getUsers} = require('../controllers/userController')

router.route('/login').post(loginUser)
router.route('/').get(getUsers)

module.exports = router

