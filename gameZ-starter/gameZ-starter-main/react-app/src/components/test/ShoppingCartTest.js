
import React, {useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadCart, addItem, removeItem, editItem, checkoutCart } from '../../store/shoppingCart';

const ShoppingCartTest = () => {
    const user = useSelector(state => state.session.user);
    const cart = useSelector(state => state?.shoppingCart?.cartItems);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(loadCart(user.id));
        // dispatch(addItem({product_id: 34, shopping_cart_id: 1}))
        // dispatch(removeItem(1))
        // dispatch(editItem({cart_item_id: 1, quantity: 10}))
        dispatch(checkoutCart({id: 1}))
    },[dispatch])



    return (
        <div>
            Test
        </div>
    )
}

export default ShoppingCartTest;
