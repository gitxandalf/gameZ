const LOAD = "categories/LOAD";
const ADD_CATEGORY = "categories/ADD"


const load = list => ({
    type: LOAD,
    list
})

const addCategory = (category) => ({
    type: ADD_CATEGORY,
    category
});


export const getCategories = () => async dispatch => {
    const response = await fetch(`/api/categories`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getCategory = (payload) => async dispatch => {
    const response = await fetch(`/api/categories/${payload}/products`);

    if (response.ok) {
        const category = await response.json();
        dispatch(addCategory(category))
    }
}


const initialState = {
    entries: []
};

const categoryReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {

        case LOAD: {
            return {
                ...state,
                entries: [...action.list.categories]
            }
        }

        case ADD_CATEGORY: {
            console.log("State", state)
            return {
                ...state,
                entries: [...state.entries, action.category, action.products]
            }
        }

        default: return state;
    }
}

export default categoryReducer;