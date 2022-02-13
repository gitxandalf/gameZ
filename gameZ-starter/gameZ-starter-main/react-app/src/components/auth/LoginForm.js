import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./LoginForm.css"
import Demo from './Demo';
import "../../components/Forms/GlobalForm.css"

const LoginForm = ({setSearch}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearch('');
  }, [])

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="login-form-div">
      <div className="login-div-style" >
        <form onSubmit={onLogin}>
          <div className="error-div">
            {errors.map((error, ind) => (
              <div className="each-error-div" key={ind}>{`* ${error}`}</div>
            ))}
          </div>
          <h2 id="form-h2">Log in</h2>
          <div className='input-div'>
            <label
            className='input-label required-field'
            htmlFor='email'>Email </label>
            <input
              className='title-input'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label 
            className='input-label required-field'
            htmlFor='password'>Password </label>
            <input
              className='title-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div className="form-btn-login">
              <button id="login-btn" type='submit'>Login</button>
            </div>

          </div>
        </form>
        <div className="form-btn-login">      
          <Demo />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
