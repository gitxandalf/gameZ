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
    const response = await fetch(`/api/products`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getProduct = (payload) => async dispatch => {
    const response = await fetch(`/api/products/${payload}`);

    if (response.ok) {
        const product = await response.json();
        dispatch(addProduct(product))
    }
}

export const postProduct = (payload) => async dispatch => {
    const { userId, categoryId, name, imageUrl, price, description } = payload
    const response = await fetch(`/api/products/add-product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "category_id": categoryId,
            "name": name,
            "image_url": imageUrl,
            "price": price,
            "description": description,
        }),
    })

    if (response.ok) {
        const submission = await response.json()
        dispatch(addProduct(submission))
        return submission;
    }
}

export const updateProduct = (payload) => async dispatch => {
    const response = await fetch(`/api/products/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const edit = await response.json()
        dispatch(editProduct(edit))
        return edit
    }
}

export const removeProduct = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}`, {
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
                entries: [...action.list.products]
            }
        }

        case ADD_PRODUCT: {
            console.log("State", state)
            return {
                ...state,
                entries: [...state.entries, action.product]
            }
        }

        case EDIT_PRODUCT: {
            return {
                ...state,
                [action.payload]: action.id
            }
        }

        case DELETE_PRODUCT: {
            newState = { ...state };
            delete newState[action.product]
            return newState;
        }

        default: return state;
    }
}

export default productReducer;