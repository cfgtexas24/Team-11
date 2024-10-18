const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Authenticate a user
// @route POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
        // Return the user's info without token
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,  // Send back their role for role-based content
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

module.exports = {
    loginUser,
};
