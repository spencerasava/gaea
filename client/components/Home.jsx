import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityFeed from './ActivityFeed';
import RegisterUserForm from './RegisterUserForm';
import LoginForm from './LoginForm';
import HomeFeed from './HomeFeed';
import UserFeed from './UserFeed';
import ActivityForm from './ActivityForm';

const Home = (props) => {
  let [loggedIn, setLoggedIn] = useState(false);
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [passwordConfirm, setPasswordConfirm] = useState('');
  let [isRegistered, setIsRegistered] = useState(true);
  let [activities, setActivities] = useState([]);
  let [userActivities, setUserActivities] = useState([]);

  const getActivities = () => {
    axios.get('/activities')
      .then(response => setActivities(response.data))
      .catch(err => console.log(err));
    // console.log('get request for activities has been run')
  };

  const loginCheckUser = () => {
    axios.get(`/login/?email=${email}`)
    .then(response => {
      if (response.data.count > 0) {
        setLoggedIn(true)
      } else {
        alert('this account has not been registered')
      }
    }).catch(err => console.log(err));
  };

  const registerUser = () => {
    console.log('got to register user post')
    axios.post('/users', {
      name,
      email,
      password,
    }).then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const getUserActivities = async (userEmail) => {
    let results = await fetch(`/user/activities?email=${userEmail}`);
    results = await results.json();
    console.log('these are the reults with fetch', results);
    setUserActivities(results)
    // await axios.get(`/user/activities?email=${userEmail}`)
    //   .then(response => response.data)
    //   .catch(err => console.log(err));
  };

  const guestLoginClick = async () => {
    setEmail('guest@email.com');
    setName('guest');
    setLoggedIn(true);
  }

  const userLogout = () => {
    setEmail('');
    setName('');
    setPassword('');
    setLoggedIn(false);
  }

  const formOutput = isRegistered
  ? <LoginForm
    email={email}
    name={name}
    password={password}
    passwordConfirm={passwordConfirm}
    loggedIn={loggedIn}
    isRegistered={isRegistered}
    setIsRegistered={setIsRegistered}
    setEmail={setEmail}
    setName={setName}
    setPassword={setPassword}
    loginCheckUser={loginCheckUser}/>
  : <RegisterUserForm
    email={email}
    name={name}
    password={password}
    passwordConfirm={passwordConfirm}
    loggedIn={loggedIn}
    isRegistered={isRegistered}
    setIsRegistered={setIsRegistered}
    setEmail={setEmail}
    setName={setName}
    setPassword={setPassword}
    setPasswordConfirm={setPasswordConfirm}
    registerUser={registerUser}/>

  useEffect(() => {
    getActivities();
  }, [])

  return (
    <div className="home-container">
      <div className="header-container">
        {loggedIn ? <h1>WELCOME {name}</h1> : <h1>You are not logged in</h1>}
      </div>
      <div className="login-form-container">
        {loggedIn
          ? <div className="activity-feed">
              logged in
              {/* <ActivityFeed /> */}
            </div>
          : formOutput
        }
      </div>
      <div className="login-buttons">
        {loggedIn
          ? <button type="button" onClick={userLogout}>Logout</button>
          : <button type="button" onClick={guestLoginClick}>Login as guest</button>
        }
      </div>
      <div>
      {loggedIn
        ? (
          <div className="feed-container">
            {/* <div> user feed goes here </div> */}
            <UserFeed
              getUserActivities={getUserActivities}
              email={email}
              userActivities={userActivities}
              setUserActivities={setUserActivities}/>
            <ActivityForm email={email} getUserActivities={getUserActivities}/>
          </div>
        )
        : (
          <div className="feed-container">
            {/* <div> All Users Feed </div> */}
            <HomeFeed activities={activities} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;
