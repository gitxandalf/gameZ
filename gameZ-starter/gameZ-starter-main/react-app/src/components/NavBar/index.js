
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import "./NavBar.css"
import logo from '../../images/logo.png'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ShoppingCartPreview from '../ShoppingCartPreview/ShoppingCartPreview';

const NavBar = () => {
  const [search, setSearch] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if (!sessionUser) setPreview(false);
  },[sessionUser]);

  const handleClick = () => {
    if (preview) setPreview(false);
    else setPreview(true);
    console.log(preview);
}


  return (
    <nav>
      <div id="nav-div">
        <img id="nav-logo" alt="logo" src={logo} />
        <div id="nav-search">
          <form onSubmit={e =>/* logic to route search correctly goes here */ 0}>
            <label htmlFor='search'>Search</label>
            <input
            id="search-input"
            name='search'
            type='text'
            placeholder='Search'
            value={search}
            onChange={e=> setSearch(e)}
            />
          </form>
        </div>
        <ul id="nav-ul">
          <li className='nav-li'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-li'>
            {sessionUser &&
              <NavLink to='/products/add-product' exact={true} activeClassName='active'>
                Add Product
              </NavLink>}
          </li>
          <li className='nav-li'>
            {!sessionUser &&
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>}
          </li>
          <li className='nav-li'>
            {!sessionUser &&
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>}
          </li>
          {/* <li className='nav-li'>
            {sessionUser &&
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>}
          </li> */}
          <li className='nav-li'>
            {sessionUser &&
              <LogoutButton />}
          </li>

          <li className='nav-li'>
              {sessionUser &&
              <ShoppingCart props={handleClick}/>}
          </li>
          {preview && <ShoppingCartPreview />}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
