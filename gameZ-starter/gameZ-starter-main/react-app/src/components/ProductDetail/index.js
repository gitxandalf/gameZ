import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getProduct, getProducts, removeProduct } from "../../store/product"
import "./ProductDetail.css"
import ReviewForm from '../Forms/ReviewForm';
import { getReviews } from '../../store/review';

function ProductDetail({ products }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const allReviews = useSelector(state => state?.review.entries)
    const user = useSelector(state => state?.session?.user);

    const { productId } = useParams();

    const product = products.find(product => product.id === +productId)

    console.log("PRODUCT", productId)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getProduct(productId))
        dispatch(getReviews())
    }, [dispatch, productId])

    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value
        dispatch(removeProduct(id))
        history.push(`/categories/${product?.category_id}/products`)
    }
    
    return (
        <div id="product-detail-div">
            <h1>ProductDetail</h1>
            <h2>Product id:{product?.id}</h2>
            <img id="product-image" src={`${product?.image_url}`} alt='Product-Details' />

            <h2>Name: {product?.name}</h2>
            <p>User_id: {product?.user_id}</p>
            <p>CategoryID: {product?.category_id}</p>
            <p>Price: {product?.price}</p>
            <p>Description: {product?.description}</p>
            <NavLink hidden={user?.id === product?.user_id ? false : true} to={`/products/${product?.id}/edit-product`} value={product?.id} className="edit">Edit</NavLink>
            <button hidden={user?.id === product?.user_id ? false : true} className="delete" value={product?.id} onClick={handleDelete} type="submit">Delete</button>
            <h2>Review</h2>
            {allReviews && allReviews.filter(review => review.product_id === parseInt(productId)).map(review => (
                <>  
                    <p>Review Title: {review?.title}</p>
                    <p>Review Content: {review?.content}</p>
                </> 
            ))}
            <ReviewForm productId={productId} />
        </div>
    );
}
export default ProductDetail;
