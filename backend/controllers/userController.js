const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Authenticate a user
// @route POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({ email });
    
    console.log(user)

    // If user exists and password matches
    if (user) {
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

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
        res.status(200).json(users);
    } else {
        res.status(404);
        throw new Error('No users found');
    }
});


const addUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        middleInitial,
        email,
        password,
        phone,
        addressLine1,
        addressLine2,
        city,
        zipCode,
        height,
        weight,
        numberPastPregnancies,
        allergies,
        currentMedications,
        previousMedication,
        familyMedicalHistory,
        previousMedicalProcedures,
        state,
        dateOfBirth,
        role,
        homelessness,
        preeclampsia,
        postpartumdepression
    } = req.body;

    console.log(req.body);

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        res.status(400);
        throw new Error('User with this email already exists');
    }

    // Create a new user instance
    const user = await User.create({
        firstName,
        lastName,
        middleInitial,
        email,
        password,  // Ensure password is hashed if storing it directly
        phone,
        addressLine1,
        addressLine2,
        city,
        zipCode,
        height,
        weight,
        numberPastPregnancies,
        allergies,
        currentMedications,
        previousMedication,
        familyMedicalHistory,
        previousMedicalProcedures,
        state,
        dateOfBirth,
        role,
        homelessness,
        preeclampsia,
        postpartumdepression
    });

    // Send back the created user info
    res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,  // Role-based info
        createdAt: user.createdAt,
    });
});

module.exports = addUser;


module.exports = {
    loginUser, getUsers, addUser
};
