import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getProduct, getProducts } from "../../store/product"
import "./ProductDetail.css"

function ProductDetail({ products }) {
    const dispatch = useDispatch()

    const allReviews = useSelector(state => state?.product?.entries[0])
    const user = useSelector(state => state?.session?.user);

    const { productId } = useParams();

    const product = products.find(product => product.id === +productId)

    console.log("PRODUCT", productId)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getProduct(productId))
    }, [dispatch, productId])

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
