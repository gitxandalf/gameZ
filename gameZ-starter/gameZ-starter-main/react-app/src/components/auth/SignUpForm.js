import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./SignUpForm.css"
import "../Forms/GlobalForm.css"

const SignUpForm = ({setSearch}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearch('');
  }, [])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, imageUrl, firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="sign-up-div">
      <form className="sign-up-form" onSubmit={onSignUp}>
        <div className="each-error-div">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <h2 id="form-h2">Sign up</h2>
        <div className='input-div'>
          <label
          className='input-label required-field'
          >User Name</label>
          <input
            className='title-input'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >Image Url</label>
          <input
            className='title-input'
            type='text'
            name='image_url'
            onChange={(e)=> setImageUrl(e.target.value)}
            value={imageUrl}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >First Name</label>
          <input
            className='title-input'
            type='text'
            name='first_name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >Last Name</label>
          <input

            className='title-input'
            type='text'
            name='last_name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >Email</label>
          <input
            className='title-input'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >Password</label>
          <input
            className='title-input'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label
            className='input-label required-field'
          >Repeat Password</label>
          <input
            className='title-input'
            className='title-input'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
        </div>

        <div className="form-btn-login">
          <button id="login-btn" type='submit'>Sign Up</button>
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;
