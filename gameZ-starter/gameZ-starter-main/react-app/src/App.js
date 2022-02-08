import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import AddProductForm from './components/Forms/AddProductForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Footer from './components/Footer/index.js';
import ProductDetail from './components/ProductDetail';
import CategoryDetail from './components/CategoryDetail'
import HomePage from './components/HomePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
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
          <AddProductForm />
        </ProtectedRoute>

        <Route path='/products/:productId' exact={true} >
          <ProductDetail />
        </Route>

        <Route path='/categories/:categoryId/products'>
          <CategoryDetail />
        </Route>

        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
          <HomePage />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
