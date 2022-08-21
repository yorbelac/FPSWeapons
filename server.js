//server.js is the primary application document which serves the API endpoints and coordinates services

//dependencies
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

//middleware
// const {errorHandler} = require('./middleware/errorMiddleware')

//initialization, required at top
connectDB()
const app = express()

//JSON and BODY parser required to req/res payloads
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({origin: "*"}));

//API ROUTES
// app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/guns', require('./routes/gunRoutes'))

//overwrites express default error handler to include stack trace
//Required BELOW routes
// app.use(errorHandler)

//app.listen awaits API calls and return console log with port number
app.listen(port, () => console.log(port))