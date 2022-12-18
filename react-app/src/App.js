import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import AddProductForm from './components/Forms/AddProductForm';
import NavBar, { queriedProducts, queriedCategorys } from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Footer from './components/Footer/index.js';
import ShoppingCart from './components/ShoppingCart'
import ProductDetail from './components/ProductDetail';
import CategoryDetail from './components/CategoryDetail'
import HomePage from './components/HomePage';
import EditProductForm from './components/Forms/EditProductForm'
import { getProducts } from './store/product';
import EditReviewForm from './components/Forms/EditReviewForm';
import PageNotFound from './components/PageNotFound';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';
import OrderDetails from './components/OrderDetails';
import { getReviews } from './store/review';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.entries)
  const reviews = useSelector((state) => state.review.entries)

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getProducts());
      await dispatch(getReviews());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <NavBar search={search} setSearch={setSearch} />

      <Switch>

        <Route exact path='/login' >
          <LoginForm setSearch={setSearch} />
        </Route>

        <Route exact path='/sign-up'>
          <SignUpForm setSearch={setSearch} />
        </Route>

        <ProtectedRoute exact path='/users'>
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute exact path='/users/:userId' >
          <User />
        </ProtectedRoute>

        <ProtectedRoute exact path='/products/add-product' >
          <AddProductForm products={products} setSearch={setSearch} />
        </ProtectedRoute>

        <ProtectedRoute exact path='/shoppingCart/:id' >
          <ShoppingCart />
        </ProtectedRoute>

        <ProtectedRoute exact path='/shoppingCart/:id/checkout' >
          <Checkout />
        </ProtectedRoute>

        <ProtectedRoute exact path='/shoppingCart/:checkedOutCartId/orderDetails' >
          <OrderDetails />
        </ProtectedRoute>

        <Route path='/products/:productId/edit-product'>
          <EditProductForm products={products} />
        </Route>

        <Route exact path='/products/:productId' >
          <ProductDetail products={products} />
        </Route>

        <Route path='/categories/:categoryId/products'>
          <CategoryDetail />
        </Route>

        <Route exact path='/reviews/:reviewId/edit-reviews' >
          <EditReviewForm products={products} reviews={reviews} />
        </Route>

        <Route exact path='/search-results' >
          <SearchResults products={queriedProducts} categories={queriedCategorys} />
        </Route>

        <Route exact path='/' >
          <HomePage />
        </Route>


        <Route>
          <PageNotFound />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
