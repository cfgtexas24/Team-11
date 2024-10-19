//const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Authenticate a user
// @route POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    console.log(req.body);
    // Find user by email
    // User.create({
    //     name,
    //     email,
    //     password
    // })
    

    const user = await User.findOne({ email });
    
    console.log(user)

    // If user exists and password matches
    if (user) {
        // Return the user's info without token
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // role: user.role,  // Send back their role for role-based content
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
        res.status(200).json(users);
    } else {
        res.status(404);
        throw new Error('No users found');
    }
});

module.exports = {
    loginUser, getUsers,
};
