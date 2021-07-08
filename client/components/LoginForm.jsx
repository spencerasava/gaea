import React, { useState, useEffect } from 'react';

const LoginForm = (props) => {
  const { email, name, password, setIsRegistered, setEmail, setName, setPassword, loginCheckUser } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    loginCheckUser();
  }

  return (
    <form className="form login-form">
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required>
      </input>
      <input type="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required>
      </input>
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required>
      </input>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      <div>Haven't logged in before?</div>
      <button type="button" onClick={() => setIsRegistered(false)}>Register Here</button>
    </form>
  )
}

export default LoginForm;