const ADD = '/shoppingCart/ADD';
const REMOVE = '/shoppingCart/REMOVE';
const CHECKOUT = '/shoppingCart/CHECKOUT';
const RESET = '/shoppingCart/RESET';
const GETCART = '/shoppingCart/GETCART'

const add = item => ({
    type: ADD,
    item
})

const remove = item => ({
    type: REMOVE,
    item
})

const checkout = products => ({
    type: CHECKOUT,
    products
})

const reset = () => ({
    type: RESET
})

const getCart = (cart) => ({
    type: GETCART,
    cart
})

export const loadCart = (id) => async dispatch => {
    const response = await fetch(`/api/shopping_cart/${id}`)

    if (response.ok) {
        const cart = await response.json();
        dispatch(getCart(cart))
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

export default shoppingCartReducer;
