const db = require('../db');
const axios = require('axios');

const tempActivity = {
  userEmail: 'guest@email.com',
  activity: 'Rock climbing',
  location: 'Leavanworth, WA',
  notes: 'today I bouldered in leavenworth. i climbed a 3 v3\'s, 1 v4\'s and a v5. i could not complete the v5'
}

const tempUser = {
  name: 'guest',
  password: 'fakepassword',
  email: 'guest@email.com',
}

const getAllActivites = (req, res) => {

}

const getUserActivities = (req, res) => {

}

const createUserActivities = (req, res) => {
  db.addActivity(null, tempActivity);
  res.sendStatus(201);
}

const createNewUser = (req, res) => {
  db.addUser(null, tempUser);
  res.sendStatus(201);
}

module.exports = {
  getAllActivites,
  getUserActivities,
  createUserActivities,
  createNewUser,
}

