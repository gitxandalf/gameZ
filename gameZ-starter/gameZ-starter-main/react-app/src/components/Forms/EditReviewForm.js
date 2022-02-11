
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom';
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

    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const [title, setTitle] = useState(review?.title);
    const [content, setContent] = useState(review?.content);

    useEffect(() => {
        dispatch(getReviews())
    }, []);

    let productId = oneProduct?.id

    useEffect(() => {
        const errors = []
        if (title.length > 50) errors.push("Titles must be less than 50 characters")
        setErrors(errors)
    }, [title]);

    let editedReview;
    const onSubmit = async (e) => {
        e.preventDefault()
        if (user && errors.length === 0) {
            editedReview = await dispatch(updateReview({ reviewId, productId, title, content, userId: user.id }))
        } else {
            setDisplayErrors(true);
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
                    {displayErrors && errors?.map((error, ind) => (
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
                        className='text-area'
                        name='content'
                        required
                        disabled={errors.length > 0}
                        onChange={updateContent}
                        value={content}
                    ></textarea>
                </div>
                <button type='submit'> Submit </button>
                <Link to={`/products/${productId}`}>Cancel</Link>
            </form>
        </div>
    )
}

export default EditReviewForm;
