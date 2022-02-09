import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import AddProductForm from './components/Forms/AddProductForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Footer from './components/Footer/index.js';
import ShoppingCartTest from './components/test/ShoppingCartTest'
import ProductDetail from './components/ProductDetail';
import CategoryDetail from './components/CategoryDetail'
import HomePage from './components/HomePage';
import EditProductForm from './components/Forms/EditProductForm'
import { getProducts } from './store/product';
import EditReviewForm from './components/Forms/EditReviewForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.entries)

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getProducts())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        <ProtectedRoute path='/products/add-product' exact={true} >
          <AddProductForm products={products} />
        </ProtectedRoute>

        <ProtectedRoute path='/shoppingCart' exact={true} >
          <ShoppingCartTest />
        </ProtectedRoute>

        <Route path='/products/:productId/edit-product'>
          <EditProductForm products={products} />
        </Route>

        <Route path='/products/:productId' exact={true} >
          <ProductDetail products={products} />
        </Route>

        <Route path='/categories/:categoryId/products'>
          <CategoryDetail />
        </Route>

        <Route path='/reviews/:reviewId/edit-reviews' exact={true} >
          <EditReviewForm products={products} />
        </Route>


        <Route path='/' exact={true} >
          <HomePage />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
