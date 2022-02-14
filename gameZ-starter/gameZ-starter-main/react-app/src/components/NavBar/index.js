
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import "./NavBar.css"
import Game from '../../images/Game.png'
import ShoppingCartPreview from '../ShoppingCartPreview/ShoppingCartPreview';
import shoppingCartIcon from '../../images/shopping-cart.png'
import { loadCart } from '../../store/shoppingCart'
import { getCategories } from '../../store/category';
import { getProducts } from '../../store/product';

let queriedProducts;
let queriedCategorys;

const NavBar = ({ search, setSearch }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state?.session?.user);
  const allCategories = useSelector(state => state?.category?.entries)
  const shoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart?.cart_items)
  const [preview, setPreview] = useState(false)
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    if (sessionUser) dispatch(loadCart(sessionUser.id));
  }, [dispatch, sessionUser])

  useEffect(() => {
    setPathName(window.location.pathname);
    window.scrollTo(0, 0);
  }, [dispatch, sessionUser, pathName])

  useEffect(() => {
    if (window.location.pathname !== '/search-results') setSearch('');
  }, [setSearch])

  useEffect(() => {
    if (!sessionUser) setPreview(false);
    if (!preview) return;

    dispatch(getCategories())
    dispatch(getProducts())

    const closeMenu = (e) => {
      if (e.target.className === 'shopping-cart-preview' || e.target.parentNode.className === 'shopping-cart-preview') return
      setPreview(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [dispatch, preview, sessionUser]);

  const handleClick = () => {
    if (preview) setPreview(false)
    else setPreview(true)
  }

  let searchProductResponse;
  let searchCategoryResponse;

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchQuery = search;

    searchCategoryResponse = await fetch(`/api/search/categories/${searchQuery}`).then((res => res.json()));
    if (searchCategoryResponse.categories[0]) {
      if (allCategories.find(category => searchCategoryResponse.categories[0].name === category.name)) {
        history.push(`/categories/${searchCategoryResponse.categories[0].id}/products`)
      }
    } else {
      searchProductResponse = await fetch(`/api/search/products/${searchQuery}`).then((res => res.json()));
      if (searchProductResponse) {
        const queryProductResponse = searchProductResponse;
        queriedProducts = queryProductResponse.products;
        if (window.location.pathname === '/search-results') {
          history.push('/')
          history.push('/search-results');
        }
        history.push('/search-results');
      };
    }
  }

  return (
    <nav>

      <div id="nav-div">

        <div id="nav-search">
          <Link exact to='/' >
            <img id="nav-logo" alt="logo" src={Game} />
          </Link>
          <form id="search-form" onSubmit={handleSearch}>
            <div id="search-div">
              <div id="search-div-under">
                <input
                  id="search-input"
                  name='search'
                  type='text'
                  placeholder='Search games'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button id="search-btn"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </form>
          <ul id="nav-ul">


            {sessionUser &&
              <li id='logout' className='nav-li user-info'>
                <p id="username">{`Welcome, ${sessionUser?.username}`}</p>

              </li>}

            <li id='add-product' className='nav-li'>
              {sessionUser &&
                <NavLink className="list-a" exact to='/products/add-product' activeClassName='active'>
                  List a Game
                </NavLink>}
            </li>


            {!sessionUser &&
              <li id='login' className='nav-li'>
                <NavLink exact to='/login' activeClassName='active'>
                  Log in
                </NavLink>
              </li>}

            {!sessionUser &&
              <li id='sign-up' className='nav-li'>
                <NavLink exact to='/sign-up' activeClassName='active'>
                  Sign up
                </NavLink>
              </li>}

            {sessionUser &&
              <li id='logout' className='nav-li'>
                <LogoutButton />
              </li>}



            <div className='shopping-cart-container'
              onClick={handleClick}>

              <li id='cart-icon' className='nav-li list-a'>
                {sessionUser &&
                  <>
                    <img
                      src={shoppingCartIcon}
                      alt="cart"
                      className='list-a'
                    />

                    <div className='shopping-cart-icon-badge'>
                      <div className='shopping-cart-icon-badge-text'>
                        <p>{shoppingCart && shoppingCart.length}</p>
                      </div>
                    </div>
                  </>}
              </li>
            </div>
            {preview && <ShoppingCartPreview />}
          </ul>
        </div>
      </div>

      <div className='nav-categories'>
        <div className='nav-category-links'>{allCategories && allCategories?.map((category) => {
          if (category?.id) return (
            <div key={category?.id}>
              <NavLink activeClassName='active' key={category?.id + 1} to={`/categories/${category?.id}/products`}>{category?.name}</NavLink>
            </div>)
          else return null
        })}
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
export { queriedProducts, queriedCategorys }
