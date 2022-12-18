import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { logout } from '../../store/session';
import "../NavBar/NavBar.css"
const LogoutButton = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button id="logout-btn-style" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
