
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import "./EditProductForm.css"
import { getReviews, postReview } from '../../store/review';
import { updateReview } from '../../store/review';




const EditReviewForm = ({ products }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { reviewId } = useParams()

    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.review.entries)
    const review = reviews.find(review => review?.id === +reviewId)
    const oneProduct = products?.find(product => review?.product_id === product?.id)

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState(review?.title)
    const [content, setContent] = useState(review?.content)

    useEffect(() => {
        dispatch(getReviews())
    }, [])
    
    let productId = oneProduct?.id
    //     useEffect(() => {
    //         const errors = []

    //         // if (!categoryId) errors.push("Please select a category")
    //         // if (name?.length > 50 | | name?.length <= 0) errors.push("Name must be less 50 characters")
    //         // if (imageUrl?.length > 255 | | imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
    //         // if (!price | | typeof price == = "number") errors.push("Please provide a valid price")
    //         setErrors(errors)
    //     }, [title, content])

    let editedReview;
    const onSubmit = async (e) => {
        e.preventDefault()
        if (user) {
            editedReview = await dispatch(updateReview({ reviewId, productId, title, content, userId: user.id }))
        }
        if (editedReview) {

            history.push(`/products/${productId}`)
        }
    }


    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const updateContent = (e) => {
        setContent(e.target.value)
    }


    return (
        <div id="reivew-product-div">
            <form className="review-product-form" onSubmit={onSubmit}>
                <div>
                    {errors && errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                < h2 > Write a review </h2>
                <div>
                    <label> Title </label>
                    <input
                        type='text'
                        name='title'
                        onChange={updateTitle}
                        value={title}
                    ></input>
                </div>
                <div>
                    <label> Review </label>
                    <textarea
                        type='text'
                        name='content'
                        required
                        disabled={errors.length > 0}
                        onChange={updateContent}
                        value={content}
                    ></textarea>
                </div>
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default EditReviewForm;
