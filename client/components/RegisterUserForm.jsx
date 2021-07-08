import React, { useState, useEffect } from 'react';

const RegisterUserForm = (props) => {
  const { email, name, password, passwordConfirm, setIsRegistered, setName, setEmail, setPassword, setPasswordConfirm } = props;
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required>
        </input>
        <input type="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required>
        </input>
        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required>
        </input>
        <input type="password" name="passwordConfirm" placeholder="Re-enter Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required>
        </input>
        <button type="submit">
          submit
        </button>
      </form>
      <div>Already have an account?</div>
      <button type="button" onClick={() => setIsRegistered(true)}>Login here</button>
    </div>
  )
}

export default RegisterUserForm;