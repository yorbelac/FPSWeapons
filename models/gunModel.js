//the goalModel is a mongoose structure which describes the schema of a goal to be used in the database
//I am getting the sense that defining these models are to associate them with like-named documents in the connected database.
//untested

//requires mongoose
const mongoose = require('mongoose')

// defines schema as an object ({keys:values},{options})
const gunSchema = mongoose.Schema(
  {
    //User._id is implied and always created automatically (noice)
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    text: {
      type: String,
    },
  },
  {
    //this option creates User.createdAt and User.updatedAt, in this schema, it results in an object with 5 key:value pairs
    timestamps: true,
  }
)

//exports mongoose.model('name', whichSchema) seems with this syntax it is possible to define and export multiple schema in a single file. Untested.
module.exports = mongoose.model('Gun', gunSchema)