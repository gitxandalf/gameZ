
const LOAD = "reviews/LOAD"
const ADD_REVIEW = "reviews/ADD_REVIEW"
const EDIT_REVIEW = "reviews/EDIT_REVIEW"
const DELETE_REVIEW = "reviews/DELETE_REVIEW"


const load = list => ({
    type: LOAD,
    list
})

const addReview = review => ({
    type: ADD_REVIEW,
    review,
})

const editReview = review => ({
    type: EDIT_REVIEW,
    review,
})

const deleteReview = review => ({
    type: DELETE_REVIEW,
    review,
})

export const getReviews = () => async dispatch => {
    const response = await fetch(`/api/reviews`)

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list.reviews))
    }
}

// export const getReview = (payload) => async dispatch => {
//     const response = await fetch(`/api/reviews/${payload}`)

//     if (response.ok) {
//         const review = await response.json()
//         dispatch(addReview(review))
//         }
//     }

export const postReview = (payload) => async dispatch => {
    const { productId, title, content, userId } = payload
    const response = await fetch(`/api/reviews/add-review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "product_id": productId,
            "title": title,
            "content": content
        }),
    })

    if (response.ok) {
        const submission = await response.json()
        dispatch(addReview(submission))
        return submission
    }
}

export const updateReview = (payload) => async dispatch => {
    const { productId, content, title, userId, reviewId } = payload
    const response = await fetch(`/api/reviews/${reviewId}/edit-review`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "product_id": productId,
            "title": title,
            "content": content,
            "review_id": reviewId
        })
    })
    if (response.ok) {
        const edit = await response.json()
        dispatch(editReview(edit))
        // dispatch(getReview(edit.id))
        return edit
    }
}

export const removeReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'delete'
    })

    if (response.ok) {
        const review = await response.json()
        dispatch(deleteReview(review))
    }
}

const initialState = {
    entries: []
}

const reviewReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                entries: [...action.list]
            }
        }

        case ADD_REVIEW: {
            return {
                ...state,
                entries: [...state.entries, action.review]
            }
        }

        case EDIT_REVIEW: {
            return {
                ...state,
                [action.payload]: action.id
            }
        }

        case DELETE_REVIEW: {
            newState = { ...state }
            delete newState[action.review]
            return newState
        }

        default: return state
    }
}

export default reviewReducer