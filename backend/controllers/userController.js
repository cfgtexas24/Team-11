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
    console.log(users)
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

const updateUser = asyncHandler(async (req, res) => {
    const userId = req.params.id; // Assuming you're sending the user ID as a URL param

    // Fetch the existing user
    const user = await User.findById(userId);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    // Update fields based on form data, if provided
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.middleInitial = req.body.middleInitial || user.middleInitial;
    user.dateOfBirth = req.body.dob || user.dateOfBirth;
    user.phone = req.body.phone || user.phone;
    user.email = req.body.email || user.email;
    user.addressLine1 = req.body.addressLine1 || user.addressLine1;
    user.addressLine2 = req.body.addressLine2 || user.addressLine2;
    user.city = req.body.city || user.city;
    user.state = req.body.state || user.state;
    user.zipCode = req.body.zipCode || user.zipCode;
    user.height = req.body.height || user.height;
    user.weight = req.body.weight || user.weight;
    user.numberPastPregnancies = req.body.pregnancies || user.numberPastPregnancies;
    user.allergies = req.body.allergies || user.allergies;
    user.currentMedications = req.body.currentMedications || user.currentMedications;
    user.previousMedication = req.body.previousMedications || user.previousMedication;
    user.familyMedicalHistory = req.body.familyHistory || user.familyMedicalHistory;
    user.previousMedicalProcedures = req.body.previousProcedures || user.previousMedicalProcedures;
    user.homlessness = req.body.experiencedHomelessness || user.homlessness;
    user.preeclampsia = req.body.historyOfPreeclampsia || user.preeclampsia;
    user.postpartumdepression = req.body.postpartumDepression || user.postpartumdepression;

    // Save the updated user back to the database
    const updatedUser = await user.save();

    res.status(200).json({
        _id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        role: updatedUser.role,
    });
});

module.exports = { loginUser, getUsers, addUser, updateUser };