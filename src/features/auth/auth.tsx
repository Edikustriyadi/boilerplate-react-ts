import React, { HtmlHTMLAttributes, SyntheticEvent, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { onLogin,onRegister } from './authSlice'

export function Auth() {

  // The `state` arg is correctly typed as `RootState` already
  const token = useAppSelector(state => state.auth.token);
  const dataUser = useAppSelector(state => state.auth.dataUser);
  const dispatch = useAppDispatch()
  // omit rendering logic
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload = {
        username,
        password
    }
    dispatch(onLogin(payload))

  }
  const handleRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload = {
        username,
        password
    }
    dispatch(onRegister(payload)) 
  }
  return (
      <div>
          <h1>{token}</h1>
          <p>{JSON.stringify(dataUser)}</p>
          <form onSubmit={handleLogin}>
              <input type="text" onChange={((e) => setUsername(e.target.value))} name="username" placeholder="Username" />
              <input type="text" onChange={((e) => setPassword(e.target.value))} name="password" placeholder="Password" />
              <button type="submit">Login</button>
          </form>
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
              <input type="text" onChange={((e) => setUsername(e.target.value))} name="username" placeholder="Username" />
              <input type="text" onChange={((e) => setPassword(e.target.value))} name="password" placeholder="Password" />
              <button type="submit">Login</button>
          </form>
      </div>
  )
}