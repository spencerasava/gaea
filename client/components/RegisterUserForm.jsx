import React, { useState, useEffect } from 'react';

const RegisterUserForm = (props) => {
  const { email, name, password, passwordConfirm, isRegistered, setIsRegistered } = props;
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" value={email} required>
        </input>
        <input type="name" name="name" placeholder="Name" value={name} required>
        </input>
        <input type="password" name="password" placeholder="Password" value={password} required>
        </input>
        <input type="password" name="passwordConfirm" placeholder="Re-enter Password" value={passwordConfirm} required>
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