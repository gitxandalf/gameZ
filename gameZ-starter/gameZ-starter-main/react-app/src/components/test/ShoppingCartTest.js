
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadCart, addItem } from '../../store/shoppingCart';

const ShoppingCartTest = () => {
    const user = useSelector(state => state.session.user);
    const cart = useSelector(state => state?.shoppingCart?.cartItems);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(loadCart(user.id));
        dispatch(addItem({product_id: 34, shopping_cart_id: 1}))
    },[dispatch])



    return (
        <div>
            Test
        </div>
    )
}

export default ShoppingCartTest;
