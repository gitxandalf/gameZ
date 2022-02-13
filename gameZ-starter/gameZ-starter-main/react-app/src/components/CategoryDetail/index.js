import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import "./CategoryDetail.css"

function CategoryDetail() {
    const dispatch = useDispatch()

    const allCategories = useSelector(state => state?.category?.entries)
    const allProducts = useSelector(state => state?.product?.entries)
    const allUsers = useSelector(state => state?.product?.usersEntries)

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
                {/* <h2 id="slogan-cat-pg">Find something you love</h2> */}
                <div className='product-links'>{allProducts?.filter(product => product?.category_id === parseInt(categoryId)).map((product) => (
                    <div id="each-product-category" key={product?.id}>
                        <Link id="image-link-a" key={product?.id} to={`/products/${product?.id}`}><img key={product?.id} className='image-link' src={product?.image_url} alt='product'></img></Link>
                        <div id="category-product-info">
                            <Link id="info-link-a" key={product?.id} to={`/products/${product?.id}`}>
                                <p className="product-info-cat name-cat-detail title-product-cat" key={product?.id}>{product?.name}</p>
                                <p className="product-info-cat username-product-cat" key={product?.id}> Developer - {allUsers[product?.user_id]?.username}</p>
                                <p id="ellipsis-text" className="product-info-cat description-product-cat" key={product?.id}>{product?.description} </p>
                                <p className="product-info-cat price-product-cat" key={product?.id}>{`$${Number.parseFloat(product?.price).toFixed(2)}`}</p>
                            </Link>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
    );
}
export default CategoryDetail;
