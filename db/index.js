const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/gaea', {useNewUrlParser: true});

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
    email: String,
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
      email: body.email,
      activity: body.activity,
      location: body.location,
      notes: body.notes,
      // photos: body.photos,
    })
  }
}

const findUser = (error, email) => {
  if (error) {
    console.log('Error: ', error)
  } else {
    return User.countDocuments({'email': email}, (err, count) => {
      if (err) throw err;
      console.log('this is the count', count)
      return count;
    })
  }
}

const findAllActivities = () => {
  return Activity.find({}, (err, activities) => {
    if (err) throw err;
    console.log(activities)
  })
}

const findUserActivites = (email) => {
  return Activity.find({'email': email}, (err, activities) => {
    if (err) throw err;
    console.log(activities);
  })
}

module.exports = {
  addUser,
  addActivity,
  findUser,
  findAllActivities,
  findUserActivites,
}
