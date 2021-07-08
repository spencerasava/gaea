const db = require('../db');
const axios = require('axios');

const tempActivity = {
  email: 'guest@email.com',
  activity: 'Rock climbing',
  location: 'Leavanworth, WA',
  notes: 'today I bouldered in leavenworth. i climbed a 3 v3\'s, 1 v4\'s and a v5. i could not complete the v5'
}

const tempUser = {
  name: 'guest',
  password: 'fakepassword',
  email: 'guest@email.com',
}

const getAllActivites = async (req, res) => {
  const results = await db.findAllActivities();
  console.log('these are the activities results', results)
  res.send(results);
}

const getUserActivities = async (req, res) => {
  const results = await db.findUserActivites(req.query.email);
  console.log('these are the activities results', results)
  res.send(results);
}

const createUserActivities = (req, res) => {
  db.addActivity(null, req.body);
  res.sendStatus(201);
}

const createNewUser = (req, res) => {
  // console.log('this is the body', req.body)
  db.addUser(null, req.body);
  res.sendStatus(201);
}

const getUserCount = async (req, res) => {
  // console.log(req.params);
  console.log(req.query)
  const result = await db.findUser(null, req.query.email)
  // console.log(db.findUser(null, 'guest@email.com'))
  console.log('this is the count result ', result)
  res.send({count: result})
}

module.exports = {
  getAllActivites,
  getUserActivities,
  createUserActivities,
  createNewUser,
  getUserCount,
}

