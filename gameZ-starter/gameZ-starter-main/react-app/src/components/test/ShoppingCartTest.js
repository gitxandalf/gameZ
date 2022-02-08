
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadCart } from '../../store/shoppingCart';

const ShoppingCartTest = () => {
    const user = useSelector(state => state.session.user);
    const cart = useSelector(state => state?.shoppingCart?.spots);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCart(user.id))
    },[dispatch])

    return (
        <div>

        </div>
    )
}

export default ShoppingCartTest;

// what exactly gets the session as a state? cant seem to get update shoppingCart state
