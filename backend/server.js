//setting up express js server

const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT | 8000
//const {errorHandler} = require('./middleware/errorMiddleware')

connectDB() //connect to the database

const app = express() //initialize express

app.use(express.json()) //middleware to parse json
app.use(express.urlencoded({extended: false})) //middleware to parse urlencoded data

app.use('/api/users', require('./routes/userRoutes')) //use the goalRoutes.js file for any routes that start with /api/goals

//app.use(errorHandler) //use the error handler middleware and overwrite the default error handler

app.listen(port, () => console.log(`Server is running on port ${port}`))
