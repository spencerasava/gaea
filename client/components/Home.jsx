import React, { useState, useEffect } from 'react';
import ActivityFeed from './ActivityFeed';
import RegisterUserForm from './RegisterUserForm';
import LoginForm from './LoginForm';

const Home = (props) => {
  let [loggedIn, setLoggedIn] = useState(false);
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [passwordConfirm, setPasswordConfirm] = useState('');
  let [isRegistered, setIsRegistered] = useState(true);

  const guestLoginClick = () => {
    setEmail('guest@email.com');
    setName('guest');
    setLoggedIn(true);
  }

  const userLogout = () => {
    setEmail('');
    setName('');
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
    setPassword={setPassword}/>
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
    setPasswordConfirm={setPasswordConfirm}/>

  return (
    <div>
      {loggedIn ? <h1>You are logged in as {name}</h1> : <h1>You are not logged in</h1>}
      {loggedIn
        ? <div className="activity-feed">
            logged in
            <ActivityFeed />
          </div>
        : formOutput
        // : <RegisterUserForm email={email} name={name} password={password} passwordConfirm={passwordConfirm} loggedIn={loggedIn}/>
      }
      <button type="button" onClick={guestLoginClick}>Login as guest</button>
      <button type="button" onClick={userLogout}>Logout</button>
    </div>
  )
}

export default Home;
