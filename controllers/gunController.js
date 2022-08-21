// goalController.js defines some logic for the different goal requests. It provides this logic to the application,
// the functions below are called by by the app when the routes connected to them in the goalRoutes.js file are hit
// it DOES interact with and directly exact CRUD operations on the database, 
// but it is receptive only, not responsible for making the requests, does not submit GET or POST

//requires express
const asyncHandler = require('express-async-handler')

//declares the mongoose.Models that are used in the controller
const Guns = require('../models/gunModel')
// const User = require('../models/userModel')

//in the following section are the logic for the different types of requests,
//when the routes are hit, it will contain a payload, that payload is received as the 'req' object
//each of these functions receive not the original req, but a modified req from authMiddleware (containing a req.user)

// GET request at /api/goals
// Goal.find()
const getGuns = asyncHandler(async (req, res) => {
  //checks req.user.id (received from authMiddleware), and matches to ids at goals.user(s) in the database via Goal.model schema
  const guns = await Guns.find()

  //responds to requester with JSON data of the goals object it just created and a status 200 (good)
  res.status(200).json(guns)
})

// // POST request to /api/goals: Create a goal
// // Goal.create()
// const setGoal = asyncHandler(async (req, res) => {
  
//   //if req.body is missing text payload ask for one.
//   if (!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field')
//   }

//   //create goal with Goal.create({$:$,$:$}) I guess mongoose can just shortcut to these crud operations? (noice)
//   const goal = await Goal.create({
//     text: req.body.text,
//     user: req.user.id,
//   })

//   //responds to requester with the newly created goal object.
//   res.status(200).json(goal)
// })

// // PUT /api/goals/:id: update a goal
// // Goal.findByIdAndUpdate(,)
// const updateGoal = asyncHandler(async (req, res) => {

//   // this request expects a req.params.id, and will check database for a matching database goal and assign to goal object.
//   const goal = await Goal.findById(req.params.id)

//   // if no req.params.id say so
//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // if no req.user say so
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // if the matched goal.user from db does not match req.user.id say so.
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   // if you made it through all that PUT using Goal.findByIdAndUpdate(id,body,{new:true})
//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })

//   // respond to requester with the updated goal object
//   res.status(200).json(updatedGoal)
// })

// // DELETE /api/goals/:id
// // goal.remove()
// const deleteGoal = asyncHandler(async (req, res) => {
  
//   //attempts to pair req.params.id to goal with matching id in the database
//   const goal = await Goal.findById(req.params.id)

//   //if no req.params.id say so
//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // if no req.user say so
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // compare matched db goal.user to req.user.id, and if not, say so.
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   // DELETE the goal from db with goal.remove, when this is called, does it call the whole operation? 
//   // await Goal.findById() etc? Is that the trick? its not a new copy of the object its the function assigned to it? wow
//   await goal.remove()

//   //respond to the requester with req.params.id that they originally sent??? Because it is the id that was deleted.
//   res.status(200).json({ id: req.params.id })
// })

//export all the functions in a stacked object {,,,,}
module.exports = {
  getGuns,
//   setGoal,
//   updateGoal,
//   deleteGoal,
}