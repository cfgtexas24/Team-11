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
            firstName: user.firstName,
            //email: user.email,
            //role: user.role,  // Send back their role for role-based content

            lastName: user.lastName,
            middleInitial: user.middleInitial,
            email: user.email,
            phone: user.phone,
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            zipCode: user.zipCode,
            height: user.height,
            weight: user.weight,
            numberPastPregnancies: user.numberPastPregnancies,
            allergies: user.allergies,
            currentMedications: user.currentMedications,
            previousMedication: user.previousMedication,
            familyMedicalHistory: user.familyMedicalHistory,
            previousMedicalProcedures: user.previousMedicalProcedures,
            state: user.state,
            dateOfBirth: user.dateOfBirth,
            role: user.role,
            homelessness: user.homelessness,
            preeclampsia: user.preeclampsia,
            postpartumdepression: user.postpartumdepression

        });

        localStorage.setItem('userInfo', {_id: user._id,
            firstName: user.firstName,
            //email: user.email,
            //role: user.role,  // Send back their role for role-based content

            lastName: user.lastName,
            middleInitial: user.middleInitial,
            email: user.email,
            phone: user.phone,
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            zipCode: user.zipCode,
            height: user.height,
            weight: user.weight,
            numberPastPregnancies: user.numberPastPregnancies,
            allergies: user.allergies,
            currentMedications: user.currentMedications,
            previousMedication: user.previousMedication,
            familyMedicalHistory: user.familyMedicalHistory,
            previousMedicalProcedures: user.previousMedicalProcedures,
            state: user.state,
            dateOfBirth: user.dateOfBirth,
            role: user.role,
            homelessness: user.homelessness,
            preeclampsia: user.preeclampsia,
            postpartumdepression: user.postpartumdepression})
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


// Update user information by ID
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params; // User ID from route parameters
    console.log(id)
    const {
        firstName,
        lastName,
        middleInitial,
        email,
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
        postpartumdepression,
    } = req.body; // Get updated data from the request body

    // Find the user by ID
    const user = await User.findById(id);
    console.log(user)
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    // Update only the fields that are provided (keep others unchanged)
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.middleInitial = middleInitial || user.middleInitial;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.addressLine1 = addressLine1 || user.addressLine1;
    user.addressLine2 = addressLine2 || user.addressLine2;
    user.city = city || user.city;
    user.zipCode = zipCode || user.zipCode;
    user.height = height || user.height;
    user.weight = weight || user.weight;
    user.numberPastPregnancies = numberPastPregnancies || user.numberPastPregnancies;
    user.allergies = allergies || user.allergies;
    user.currentMedications = currentMedications || user.currentMedications;
    user.previousMedication = previousMedication || user.previousMedication;
    user.familyMedicalHistory = familyMedicalHistory || user.familyMedicalHistory;
    user.previousMedicalProcedures = previousMedicalProcedures || user.previousMedicalProcedures;
    user.state = state || user.state;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.role = role || user.role;
    user.homelessness = homelessness || user.homelessness;
    user.preeclampsia = preeclampsia || user.preeclampsia;
    user.postpartumdepression = postpartumdepression || user.postpartumdepression;

    // Save updated user info
    const updatedUser = await user.save();

    // Send updated user data
    res.status(200).json({
        _id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        role: updatedUser.role,
        updatedAt: updatedUser.updatedAt,
    });
});



module.exports = {
    loginUser, getUsers, addUser, updateUser
};
