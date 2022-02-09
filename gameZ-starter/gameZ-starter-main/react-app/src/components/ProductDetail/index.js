import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getProduct, getProducts, removeProduct } from "../../store/product"
import "./ProductDetail.css"
import AddReviewForm from '../Forms/AddReviewForm';
import { getReviews, removeReview } from '../../store/review';
import { getCategories } from '../../store/category'

function ProductDetail({ products }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const allReviews = useSelector(state => state?.review.entries)
    const user = useSelector(state => state?.session?.user);

    const { productId } = useParams();

    const product = products.find(product => product.id === +productId)
    const stateUsers = useSelector(state => state?.product?.usersEntries)
    const category = useSelector(state => state?.category?.entries)


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
        dispatch(getProduct(productId))
        dispatch(getReviews())
    }, [dispatch, productId])

    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value
        dispatch(removeProduct(id))
        history.push(`/categories/${product?.category_id}/products`)
    }

    const handleReviewDelete = (e) => {
        e.preventDefault();
        const id = parseInt(e.target.value)
        dispatch(removeReview(id));
        dispatch(getReviews())
        history.push(`/products/${productId}`)
    }


    return (
        <div id="product-detail-div">
            <h1>Game Details</h1>
            <img id="product-image" src={`${product?.image_url}`} alt='Product-Details' />
            <h2>Name: {product?.name}</h2>
            <p>Developer: {stateUsers[product?.user_id]?.username}</p>
            <p>Category: {category[product?.category_id - 1]?.name}</p>
            <p>Price: {`$${product?.price}`}</p>
            <p>Description: {product?.description}</p>
            <NavLink hidden={user?.id === product?.user_id ? false : true} to={`/products/${product?.id}/edit-product`} value={product?.id} className="edit">Edit</NavLink>
            <button hidden={user?.id === product?.user_id ? false : true} className="delete" value={product?.id} onClick={handleDelete} type="submit">Delete</button>
            <h2>Review</h2>
            {allReviews && allReviews?.filter(review => review?.product_id === parseInt(productId)).map(review => (
                <div>
                    <p>Review Title: {review?.title}</p>
                    <p>Review Content: {review?.content}</p>
                    {user &&
                        <>
                            <NavLink hidden={review?.user_id !== user.id} to={`/reviews/${review?.id}/edit-reviews`} value={review?.id} className="edit">Edit</NavLink>
                            <button hidden={review?.user_id !== user.id} className="delete" value={review?.id} onClick={handleReviewDelete} type="submit">Delete</button>
                        </>
                    }
                </div>
            ))}

            {user && !(product?.user_id === user?.id) &&
                <AddReviewForm productId={productId} />}
        </div>
    );
}
export default ProductDetail;
