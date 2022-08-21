//gunRoutes handles ('/')

//This file requires express, its router method, functions from the goalController, and the protect middleware.
const express = require('express')
const router = express.Router()
const {getGuns} = require('../controllers/gunController')
// const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getGuns)

module.exports = router