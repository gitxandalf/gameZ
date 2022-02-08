const CHECKOUT = '/shoppingCart/CHECKOUT';
const RESET = '/shoppingCart/RESET';
const GETCART = '/shoppingCart/GETCART'

const checkout = products => ({
    type: CHECKOUT,
    products
})

const reset = () => ({
    type: RESET
})

const getCart = (payload) => ({
    type: GETCART,
    payload
})

export const loadCart = (id) => async dispatch => {
    const response = await fetch(`/api/shopping_carts/${id}`)

    if (response.ok) {
        const cart = await response.json();
        dispatch(getCart(cart))
    }
}

export const addItem = (item) => async dispatch => {
    const res = await fetch('/api/shopping_carts/add_cart_item', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({shopping_cart_id: item.shopping_cart_id, product_id: item.product_id, quantity: 1})
    })
    if(res.ok) {
        const item = await res.json();
        dispatch(loadCart(item.shopping_cart_id));
        return "ok";
    }
}

export const removeItem = (cart_item_id) => async dispatch => {
    const res = await fetch('/api/shopping_carts/delete_cart_item', {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({cart_item_id})
    })

    if(res.ok) {
        const item = await res.json();
        dispatch(loadCart(item.shopping_cart_id));
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
        const item = await res.json();
        dispatch(loadCart(item.shopping_cart_id));
        return "ok";
    }
}

const shoppingCartReducer = (state = {}, action) => {
    let newState;

    switch(action.type) {
        case GETCART: {
            return {
                ...state,
                cartItems: action.payload
            }
        }
        default: return state;
    }
}
// const testItem = state?.cartItems?.cart_items.find(item => item.id == 34)
export default shoppingCartReducer;
