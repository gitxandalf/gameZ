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

export const getProducts = () => async dispatch => {
    const response = await fetch(`/api/products/`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getProduct = (payload) => async dispatch => {
    const response = await fetch(`/api/products/${payload}`);

    if (response.ok) {
        const product = await response.json();

        dispatch(getProducts())
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
    const { userId, id, categoryId, name, imageUrl, price, description } = payload
    const response = await fetch(`/api/products/${payload.id}/edit-product`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "id": id,
            "category_id": categoryId,
            "name": name,
            "image_url": imageUrl,
            "price": price,
            "description": description,
        })
    })
    if (response.ok) {
        const edit = await response.json()
        dispatch(editProduct(edit))
        dispatch(getProduct(id))
        return edit
    }
}

export const removeProduct = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}`, {
        method: 'delete'
    });

    if (response.ok) {
        dispatch(getProducts())
    }
}

const initialState = {
    entries: []
};

const productReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {

        case LOAD: {

            const usersEntries = [...action.list.users].reduce((a, b) => {
                return { ...a, [b.id]: { id: b.id, username: b.username, image_url: b.image_url } }
            }, {})
            return {
                ...state,
                entries: [...action.list.products],
                usersEntries: usersEntries
            }
        }

        case ADD_PRODUCT: {
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
