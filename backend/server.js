//setting up express js server

//const dotenv = require('dotenv');
//dotenv.config({ path: './.env' });  // Explicitly specify the path if needed

const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const cors = require('cors');
//const {errorHandler} = require('./middleware/errorMiddleware')

connectDB() //connect to the database

const app = express() //initialize express

// Enable CORS for the frontend running on localhost:5173
app.use(cors({
    origin: 'http://localhost:5173',  // Allow only this origin
    methods: ['GET', 'POST'],          // Specify allowed HTTP methods
    credentials: true,                 // Allow credentials if needed (optional)
}));

app.use(express.json()) //middleware to parse json
app.use(express.urlencoded({extended: false})) //middleware to parse urlencoded data

app.use('/api', require('./routes/userRoutes')) //use the userRoutes.js file for any routes that start with /api/users
app.use('/api/user', require('./routes/appointmentRoutes')) 

//app.use(errorHandler) //use the error handler middleware and overwrite the default error handler

app.listen(port, () => console.log(`Server is running on port ${port}`))


// // Set the folder containing the PDFs
// const pdfFolder = path.join(__dirname, 'pdfs');

// // Route to get the list of PDF files
// app.get('/lab-reports', (req, res) => {
//   fs.readdir(pdfFolder, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Unable to fetch files' });
//     }
//     // Filter only PDF files
//     const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
//     res.json(pdfFiles);
//   });
// });

// // Route to serve the PDFs statically
// app.use('/pdfs', express.static(pdfFolder));

