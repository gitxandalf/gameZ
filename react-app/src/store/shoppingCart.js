const GETCART = '/shoppingCart/GETCART'

const getCart = (payload) => ({
    type: GETCART,
    payload
})

export const loadCart = (userId) => async dispatch => {
    const response = await fetch(`/api/shopping_carts/${userId}`)

    if (response.ok) {
        const cart = await response.json();
        dispatch(getCart(cart))
    }
}

export const addItem = (item) => async dispatch => {
    const res = await fetch('/api/shopping_carts/add_cart_item', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({shopping_cart_id: item.shopping_cart_id, product_id: item.product_id, quantity: item.quantity})
    })
    if(res.ok) {
        dispatch(loadCart(item.user_id));
        return "ok";
    }
}

export const removeItem = (cart_item) => async dispatch => {
    const res = await fetch('/api/shopping_carts/delete_cart_item', {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({cart_item_id: cart_item.cart_item_id})
    })

    if(res.ok) {
        dispatch(loadCart(cart_item.user_id));
        return "ok";
    }
}

export const editItem = (item) => async dispatch => {
    const res = await fetch('/api/shopping_carts/edit_cart_item', {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({cart_item_id: item.cart_item_id, quantity: item.quantity})
    })

    if(res.ok) {
        dispatch(loadCart(item.user_id));
        return "ok";
    }
}

export const checkoutCart = (shoppingCart) => async dispatch => {
    const res = await fetch('/api/shopping_carts/checkout_cart', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shoppingCart)
    })

    if(res.ok) {
        const newCart = await res.json();
        dispatch(loadCart(newCart.user_id));
        return "ok";
    }

}

const shoppingCartReducer = (state = {}, action) => {
    let newState;

    switch(action.type) {
        case GETCART: {
            newState = {
                ...state,
                ...action.payload
            };
            return newState;
        }
        default: return state;
    }
}

export default shoppingCartReducer;
