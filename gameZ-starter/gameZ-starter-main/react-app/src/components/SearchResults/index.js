import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import { loadCart } from '../../store/shoppingCart';
import "./SearchResults.css"

function SearchResults({ products, categories, search }) {
    const dispatch = useDispatch()

    const allUsers = useSelector(state => state?.product?.usersEntries)
    const sessionUser = useSelector(state => state?.session?.user);

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
        if (sessionUser) dispatch(loadCart(sessionUser.id))
    }, [dispatch, sessionUser])

    return (
        <div>
            <div className='category-detail'>
                <div id="category-title-div">
                    <h1 id="category-h1">Search Results</h1>
                </div>

                <div className='no-products'>
                    {products && products.length === 0 &&
                        <>
                            <h1>We couldn't find any results for your search.</h1>
                            <h4>Try searching for something else instead?</h4>
                        </>
                    }
                </div>

                <div className='product-links'>{products && products?.map((product) => (
                    <div id="each-product-category" key={product?.id}>
                        <Link id="image-link-a" key={product?.id} to={`/products/${product?.id}`}><img key={product?.id} className='image-link' src={product?.image_url} alt='product' ></img></Link>
                        <div id="category-product-info">
                            <Link id="info-link-a" key={product?.id} to={`/products/${product?.id}`}>
                                <p className="product-info-cat title-product-cat" key={product?.id}> Title: {product?.name}</p>
                                <p id="ellipsis-text" className="product-info-cat description-product-cat" key={product?.id}>Description: {product?.description} </p>
                                <p className="product-info-cat price-product-cat" key={product?.id}>{`$${Number.parseFloat(product?.price).toFixed(2)}`}</p>
                                <p className="product-info-cat username-product-cat" key={product?.id}>{allUsers[product?.user_id]?.username}</p>
                            </Link>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
    );
}
export default SearchResults;
