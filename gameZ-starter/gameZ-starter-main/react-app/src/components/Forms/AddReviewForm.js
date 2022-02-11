
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
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const user = useSelector(state => state.session.user)

    // useEffect(() => {
    //     const errors = []

    //     if (!title) errors.push("Please provide a title")
    //     if (title?.length > 50 || title?.length <= 0) errors.push("Name must be less 50 characters")
    //     if (!content) errors.push("Please provide a review")
    //     setErrors(errors)
    
    // }, [title, content])


    let review;
    const onSubmit = async (e) => {
        e.preventDefault()
        if (user) {
            review = await dispatch(postReview({ productId, title, content, userId: user.id }))
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
                    {errors && errors?.map((error, ind) => (
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
