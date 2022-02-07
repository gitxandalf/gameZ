import { csrfFetch } from "./csrf"

const LOAD = "products/LOAD";
const ADD_PRODUCT = "products/ADD_PRODUCT"
const EDIT_PRODUCT = "products/EDIT_PRODUCT"
const DELETE_PRODUCT = "products/DELETE_PRODUCT"


const load = list => ({
    type: LOAD,
    list
})

const addProduct = product => ({
    type: ADD_PRODUCT,
    product,
});

const editProduct = product => ({
    type: EDIT_PRODUCT,
    product,
})

const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product,
})

export const getProducts = () => async dispatch => {
    const response = await csrfFetch(`/api/products`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getProduct = (payload) => async dispatch => {

    const response = await csrfFetch(`/api/products/${payload}`);

    if (response.ok) {
        const product = await response.json();
        dispatch(addProduct(product))
    }
}

export const postProduct = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const submission = await response.json()
        dispatch(addProduct(submission))
        return submission;
    }
}

export const updateProduct = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/products/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const edit = await response.json()
        dispatch(editImage(edit))
        return edit
    }
}

export const removeProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`, {
        method: 'delete'
    });

    if (response.ok) {
        const product = await response.json();
        dispatch(deleteProduct(product))
    }
}

const initialState = {
    entries: []
};

const productReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {

        case LOAD: {
            return {
                ...state,
                entries: [...action.list]
            }
        }

        case ADD_IMAGE: {
            return {
                ...state,
                entries: [...state.entries, action.product]
            }
        }

        case EDIT_IMAGE: {
            return {
                ...state,
                [action.payload]: action.id
            }
        }

        case DELETE_IMAGE: {
            newState = { ...state };
            delete newState[action.product]
            return newState;
        }

        default: return state;
    }
}

export default productReducer;