import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import "./CategoryDetail.css"

function CategoryDetail() {
    const dispatch = useDispatch()

    const allCategories = useSelector(state => state?.category?.entries)
    const allProducts = useSelector(state => state?.product?.entries)
    const sessionUser = useSelector(state => state?.session?.user);

    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getCategory(categoryId))
        dispatch(getProducts())

    }, [dispatch, categoryId])

    return (
        <div>
            <div className='category-detail'>
                <div id="category-title-div">
                    <h1 id="category-h1"> {allCategories[`${categoryId - 1}`]?.name} Games</h1>
                </div>
                <h2 id="slogan-cat-pg">Find something you love</h2>
                <div className='product-links'>{allProducts?.filter(product => product?.category_id === parseInt(categoryId)).map((product) => (
                    <div id="each-product-category" key={product?.id}>
                        <Link id="image-link-a" key={product?.id} to={`/products/${product?.id}`}><img key={product?.id} className='image-link' src={product?.image_url}></img></Link>
                        <div id="category-product-info">
                            <Link id="info-link-a" key={product?.id} to={`/products/${product?.id}`}>
                                <p className="product-info-cat title-product-cat" key={product?.id}> Title: {product?.name}</p>
                                <p className="product-info-cat description-product-cat" key={product?.id}>Description: {product?.description} </p>
                                <p className="product-info-cat price-product-cat" key={product?.id}>{`$${product?.price}`}</p>
                            </Link>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
    );
}
export default CategoryDetail;
