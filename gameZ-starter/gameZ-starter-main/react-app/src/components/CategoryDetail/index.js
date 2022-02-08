import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import "./CategoryDetail.css"

function CategoryDetail() {
    const dispatch = useDispatch()

    const allCategories = useSelector(state => state.category.entries)
    const allProducts = useSelector(state => state.product.entries)
    const sessionUser = useSelector(state => state.session.user);

    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getCategory(categoryId))
        dispatch(getProducts())

    }, [dispatch, categoryId])

    return (
        <div>
            <div className='category-detail'>

                <h1>{allCategories[`${categoryId - 1}`]?.name} Games</h1>
                <div className='product-links'>{allProducts?.filter(product => product?.category_id === parseInt(categoryId)).map((product) => (
                    <div key={product?.id}>
                        <Link key={product?.id} to={`/products/${product.id}`}><img key={product?.id} className='image-link' src={product?.image_url}></img></Link>
                        <Link key={product?.id} to={`/products/${product.id}`}> <br /> Title: {product?.name} <br /> Description: {product?.description} <br /> Price: {`$${product?.price}`}</Link>
                    </div>
                ))}</div>

            </div>
        </div>
    );
}
export default CategoryDetail;
