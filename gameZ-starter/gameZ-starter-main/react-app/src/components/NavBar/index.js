
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import "./NavBar.css"
import Game from '../../images/Game.png'
import ShoppingCart from '../ShoppingCart';
import ShoppingCartPreview from '../ShoppingCartPreview/ShoppingCartPreview';
import shoppingCartIcon from '../../images/shopping-cart.png'
import { loadCart } from '../../store/shoppingCart'
import { getCategories } from '../../store/category';
import { getProducts } from '../../store/product';

let queriedProducts;
let queriedCategorys;

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const sessionUser = useSelector(state => state?.session?.user);
  const allCategories = useSelector(state => state?.category?.entries)
  const allProducts = useSelector(state => state?.products?.entries)
  const [preview, setPreview] = useState(false)
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    if (sessionUser) dispatch(loadCart(sessionUser.id));
  }, [dispatch, sessionUser])

  useEffect(() => {
    setPathName(window.location.pathname);
    window.scrollTo(0, 0);
    if (pathName !== pathName) {
      queriedProducts = '';
      queriedCategorys = '';
    }
  }, [dispatch, sessionUser, window.location.pathname])

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
          <Link to='/' exact={true} activeClassName='active'>
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
                <button id="search-btn"><i class="fas fa-search"></i></button>
            </div>
            </div>
          </form>
          <ul id="nav-ul">
            <li id='add-product' className='nav-li'>
              {sessionUser &&
                <NavLink className="list-a" to='/products/add-product' exact={true} activeClassName='active'>
                  List a Game
                </NavLink>}
            </li>


            {!sessionUser &&
            <li id='login' className='nav-li'>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Log in
                </NavLink>
            </li>}

            {!sessionUser &&
            <li id='sign-up' className='nav-li'>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign up
                </NavLink>
            </li>}


            {sessionUser &&
              <li id='logout' className='nav-li'>
                  <LogoutButton />
              </li>}


            <li id='cart-icon' className='nav-li list-a'>
              {sessionUser &&
                <img
                  src={shoppingCartIcon}
                  onClick={handleClick}
                  alt="cart"
                  className='list-a'
                  />}
            </li>
            {preview && <ShoppingCartPreview />}
          </ul>
        </div>
      </div>

      <div className='nav-categories'>
        <div className='nav-category-links'>{allCategories && allCategories?.map((category) => {
          if(category?.id)return(
            <div key={category?.id}>
              <NavLink activeClassName='active' key={category?.id + 1} to={`/categories/${category?.id}/products`}>{category?.name}</NavLink>
          </div>
      )})}
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
export { queriedProducts, queriedCategorys }
