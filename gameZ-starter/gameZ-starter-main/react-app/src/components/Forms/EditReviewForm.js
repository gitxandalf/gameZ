
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom';
import "./EditProductForm.css"
import { getReviews } from '../../store/review';
import { updateReview } from '../../store/review';

const EditReviewForm = ({ products, reviews }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { reviewId } = useParams()

    const user = useSelector(state => state.session.user)
    // const reviews = useSelector(state => state.review.entries)
    const review = reviews.find(review => review?.id === +reviewId)
    const oneProduct = products?.find(product => review?.product_id === product?.id)

    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const [title, setTitle] = useState(review?.title);
    const [content, setContent] = useState(review?.content);

    useEffect(() => {
        dispatch(getReviews())
        window.scrollTo(0,0);
    }, []);

    let productId = oneProduct?.id

    useEffect(() => {
        const errors = []
        if (title){
            if (title.length > 50) errors.push("Titles must be less than 50 characters")
            if (title === " " || title === "  ") errors.push("Please provide a title")
        }
        if (content) {
            if (content === " " || content === "  ") errors.push("Please provide content for your review")
        }
        setErrors(errors)
    }, [title, content]);

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
        <div id="edit-reivew-product-div">
            <form className="style-form-edit" onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}
                </div>
                <h2 id="form-h2"> Edit review </h2>
                <div className='input-div'>
                    <label className='input-label'> Title </label>
                    <input
                        className='title-input'
                        type='text'
                        name='title'
                        onChange={updateTitle}
                        value={title}
                    ></input>
                </div>
                <div className='input-div'>
                    <label className='input-label'> Review </label>
                    <textarea
                        type='text'
                        className='text-area'
                        name='content'
                        required
                        onChange={updateContent}
                        value={content}
                    ></textarea>
                </div>

                <div className='submit-btn-div'>
                    <button className="submit-btn" type='submit'> Submit </button>
                </div>
               
                <div className='submit-btn-div'>
                    <Link className="submit-btn" to={`/products/${productId}`}>Cancel</Link>
                </div>

            </form>
        </div>
    )
}

export default EditReviewForm;
