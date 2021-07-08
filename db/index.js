const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/gaea');

const userSchema = new Schema (
  {
    name: String,
    password: String,
    email: String,
  },
  { timestamps: true }
)

const activitySchema = new Schema (
  {
    userEmail: String,
    activity: String,
    location: String,
    notes: String,
    photos: Array,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema);

const addUser = (error, body) => {
  if (error) {
    console.log(error)
  } else {
    User.create({
      name: body.name,
      email: body.email,
      password: body.password,
    })
  }
}

const addActivity = (error, body) => {
  if (error) {
    console.log('Error: ', error)
  } else {
    Activity.create({
      userEmail: body.email,
      activity: body.activity,
      location: body.location,
      notes: body.notes,
      // photos: body.photos,
    })
  }
}

module.exports = {
  addUser,
  addActivity
}
