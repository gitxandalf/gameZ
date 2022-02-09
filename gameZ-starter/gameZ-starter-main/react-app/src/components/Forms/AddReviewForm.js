
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import "./EditProductForm.css"
import { postReview } from '../../store/review';




const AddReviewForm = ({ productId }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const user = useSelector(state => state.session.user)

    //     useEffect(() => {
    //         const errors = []

    //         // if (!categoryId) errors.push("Please select a category")
    //         // if (name?.length > 50 | | name?.length <= 0) errors.push("Name must be less 50 characters")
    //         // if (imageUrl?.length > 255 | | imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
    //         // if (!price | | typeof price == = "number") errors.push("Please provide a valid price")
    //         setErrors(errors)
    //     }, [title, content])

    let review;
    const onSubmit = async (e) => {
        e.preventDefault()
        if (user) {
            review = await dispatch(postReview({ productId, title, content, userId: user.id }))
        }
        if (review) {

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
                        className='text-area'
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

export default AddReviewForm;
