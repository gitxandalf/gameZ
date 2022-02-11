
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import "./EditProductForm.css"
import { postReview } from '../../store/review';
import "./GlobalForm.css"



const AddReviewForm = ({ productId }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([])
    const [displayErrors, setDisplayErrors] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const user = useSelector(state => state.session.user)

        useEffect(() => {
            const errors = []
            if (title.length > 50) errors.push("Titles must be less than 50 characters")
            setErrors(errors)
        }, [title])

    let review;
    const onSubmit = async (e) => {
        e.preventDefault()
        if (user && errors.length === 0) {
            review = await dispatch(postReview({ productId, title, content, userId: user.id }))
        } else {
            setDisplayErrors(true);
        }

        if (review) {
            history.push(`/products/${productId}`)
            setTitle("")
            setContent("")
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
                <h2 id="review-form-h2">Write a review</h2>
                <div className='input-div'>
                    <label className='input-label required-field'>Title </label>
                    <input
                        className='review-title-input'
                        type='text'
                        name='title'
                        required
                        onChange={updateTitle}
                        value={title}
                    ></input>
                </div>
                <div className='input-div'>
                    <label className='input-label required-field'>Review </label>
                    <textarea
                        className='review-text-area'
                        type='text'
                        name='content'
                        required
                        onChange={updateContent}
                        value={content}
                    ></textarea>
                </div>
                <div id="">

                </div>
                <button 
                className="review-submit-btn"
                // disabled={errors.length > 0}
                type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default AddReviewForm;
