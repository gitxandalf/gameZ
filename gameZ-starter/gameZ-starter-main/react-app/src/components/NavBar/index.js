
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import "./NavBar.css"
import logo from '../../images/logo.png'
import ShoppingCart from '../ShoppingCart';
import ShoppingCartPreview from '../ShoppingCartPreview/ShoppingCartPreview';
import shoppingCartIcon from '../../images/shopping-cart.png'
import { loadCart } from '../../store/shoppingCart'

const NavBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  const allCategories = useSelector(state => state.category.entries)
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if(sessionUser) dispatch(loadCart(sessionUser.id));
  }, [dispatch, sessionUser])

  useEffect(() => {
    if (!sessionUser) setPreview(false);
    if (!preview) return;

    const closeMenu = (e) => {
      if(e.target.className === 'shopping-cart-preview' || e.target.parentNode.className === 'shopping-cart-preview') return
      setPreview(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [preview, sessionUser]);

  const handleClick = () => {
    if (preview) setPreview(false)
    else setPreview(true)
  }

  return (
    <nav>

      <div id="nav-div">


        <div id="nav-search">
          <Link to='/' exact={true} activeClassName='active'>
            <img id="nav-logo" alt="logo" src={logo} />
          </Link>
          <form onSubmit={e =>/* logic to route search correctly goes here */ 0}>
            <label htmlFor='search'>Search</label>
            <input
              id="search-input"
              name='search'
              type='text'
              placeholder='Search'
              value={search}
              onChange={e => setSearch(e)}
            />
          </form>

          <ul id="nav-ul">
            <li id='add-product' className='nav-li'>
              {sessionUser &&
                <NavLink to='/products/add-product' exact={true} activeClassName='active'>
                  List a Game
                </NavLink>}
            </li>
            <li id='login' className='nav-li'>
              {!sessionUser &&
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>}
            </li>
            <li id='sign-up' className='nav-li'>
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
            <li id='logout' className='nav-li'>
              {sessionUser &&
                <LogoutButton />}
            </li>

            <li id='cart-icon' className='nav-li'>
              {sessionUser &&
                <img
                  src={shoppingCartIcon}
                  onClick={handleClick} />}
            </li>
            {preview && <ShoppingCartPreview />}
          </ul>
        </div>
      </div>

      <div className='nav-categories'>
        <div className='nav-category-links'>{allCategories && allCategories?.map((category) => (
          <div key={category?.id}>
            <Link key={category?.id + 1} to={`/categories/${category?.id}/products`}>{category?.name}</Link>
          </div>
        ))}
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
