
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  
  return (
    <nav>
      <div id="nav-div">
        <img id="nav-logo" src="logo.png" />
        <div id="nav-search">
          <label htmlFor='search'>Search</label>
          <input
            id="search-input"
            name='search'
            type='text'
            placeholder='Search'
            value={search}
            onChange={e=> setSearch(e)}
          />
        </div>
        <ul id="nav-ul">
          <li className='nav-li'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-li'>
            {!sessionUser &&
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>}
          </li>
          <li className='nav-li'>
            { !sessionUser &&
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>}
          </li>
          <li className='nav-li'>
            {sessionUser &&
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>}
          </li>
          <li className='nav-li'>
            {sessionUser &&
            <LogoutButton />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
