import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityFeed from './ActivityFeed';
import RegisterUserForm from './RegisterUserForm';
import LoginForm from './LoginForm';
import HomeFeed from './HomeFeed';
import UserFeed from './UserFeed';
import ActivityForm from './ActivityForm';

const Home = (props) => {
  const { darkMode } = props
  let [loggedIn, setLoggedIn] = useState(false);
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [passwordConfirm, setPasswordConfirm] = useState('');
  let [isRegistered, setIsRegistered] = useState(true);
  let [activities, setActivities] = useState([]);
  let [userActivities, setUserActivities] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [counter, setCounter] = useState(0)

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
    setUserActivities(results);
    setCounter(counter += 1);
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

  const feedRender = () => {
    if (loggedIn) {
      return (
        <div className="feed-container">
            <UserFeed
              getUserActivities={getUserActivities}
              email={email}
              userActivities={userActivities}
              setUserActivities={setUserActivities}/>
            {/* {showModal ? <ActivityForm email={email} getUserActivities={getUserActivities} toggleModal={toggleModal} darkMode={darkMode}/> : null} */}
          </div>
      )
    } else {
      return (
        <div className="feed-container">
          <HomeFeed activities={activities} />
        </div>
      )
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const addedThisForGHDesktop = () => {
    console.log('hmmmmm')
  }


  useEffect(() => {
    getActivities();
    getUserActivities(email);
  }, [email])

  return (
    <div>
      <div
        className={showModal ? "home-container unfocused" : "home-container"}
        onClick={showModal ? toggleModal : () => {}}
      >
        <div className="header-container">
          {loggedIn ? <h1>WELCOME {name}</h1> : <h1>&lt;hello gaea&gt;</h1>}
        </div>
        <div className="login-form-container">
          {loggedIn
            ? <div className="activity-feed">
                logged in
              </div>
            : formOutput
          }
        </div>
        <div className="login-buttons">
          {loggedIn
            ? (
              <div>
                <button type="button" onClick={userLogout}>Logout</button>
                <button type="button" onClick={toggleModal}>Submit new activity</button>
              </div>
            )
            : <button type="button" onClick={guestLoginClick}>Login as guest</button>

          }
        </div>
        <div>
          {feedRender()}
          {addedThisForGHDesktop()}
        </div>
      </div>
      {showModal ? <ActivityForm email={email} setCounter={setCounter} counter={counter} getUserActivities={getUserActivities} toggleModal={toggleModal} darkMode={darkMode}/> : null}
    </div>
  )
}

export default Home;

// {loggedIn
//   ? (
//     <div className="feed-container">
//       {/* <div> user feed goes here </div> */}
//       <UserFeed
//         getUserActivities={getUserActivities}
//         email={email}
//         userActivities={userActivities}
//         setUserActivities={setUserActivities}/>
//       <ActivityForm email={email} getUserActivities={getUserActivities}/>
//     </div>
//   )
//   : (
//     <div className="feed-container">
//       {/* <div> All Users Feed </div> */}
//       <HomeFeed activities={activities} />
//     </div>
//   )}