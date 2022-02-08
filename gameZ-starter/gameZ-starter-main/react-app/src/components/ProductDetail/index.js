import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from "../../store/product"
import "./ProductDetail.css"

function ProductDetail() {
    const dispatch = useDispatch()

    const oneProduct = useSelector(state => state.product.entries[state.product.entries.length-1])
    const allReviews = useSelector(state => state.product.entries[0])
    const sessionUser = useSelector(state => state.session.user);

    const { productId } = useParams();
    useEffect(() => {
        dispatch(getProduct(productId))

    }, [dispatch, productId])

    return (
       <div id="product-detail-div">
            <h1>ProductDetail</h1>
            <h2>Product id:{oneProduct?.product?.id}</h2>
            <img id="product-image" src={`${oneProduct?.product?.image_url}`} alt='Product-Details'/>
            
            <h2>Name: {oneProduct?.product?.name}</h2>
            <p>User_id: {oneProduct?.product?.user_id}</p>
            <p>CategoryID: {oneProduct?.product?.category_id}</p>
            <p>Price: {oneProduct?.product?.price}</p>
            <p>Description: {oneProduct?.product?.description}</p>
            <h2>Review</h2>
            {allReviews && allReviews?.reviews?.map(review => (
                <>
                 <p>Review Title: {review?.title}</p>
                 <p>Review Content: {review?.content}</p>
                </>
            ))}
            
       </div>
    );
}
export default ProductDetail;
