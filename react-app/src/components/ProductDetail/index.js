import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getProduct, getProducts, removeProduct } from "../../store/product"
import "./ProductDetail.css"
import AddReviewForm from '../Forms/AddReviewForm';
import { getReviews, removeReview } from '../../store/review';
import { getCategories } from '../../store/category'
import { addItem, editItem, loadCart } from '../../store/shoppingCart';
import "../Forms/GlobalForm.css"

function ProductDetail({ products }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const allReviews = useSelector(state => state?.review?.entries)
    const user = useSelector(state => state?.session?.user);
    const [itemQuantity, setItemQuantity] = useState(1);

    const { productId } = useParams();

    const product = products.find(product => product?.id === +productId)
    const stateUsers = useSelector(state => state?.product?.usersEntries)
    const category = useSelector(state => state?.category?.entries)
    const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart)


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
        dispatch(getProduct(productId))
        dispatch(getReviews())
        if(user) dispatch(loadCart(user.id))
    }, [dispatch, productId, user])

    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value
        dispatch(removeProduct(id))
        history.push(`/categories/${product?.category_id}/products`)
    }



    const handleReviewDelete = async (e) => {
        e.preventDefault();
        const id = parseInt(e.target.value)
        await dispatch(removeReview(id));
        dispatch(getReviews())
        history.push(`/products/${productId}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user) {
            history.push('/login')
            return;
        };

        const newCartItem = {
            shopping_cart_id: currShoppingCart.id,
            product_id: product.id,
            quantity: itemQuantity,
            user_id: currShoppingCart.user_id
        }
        for(let i = 0; i < currShoppingCart.cart_items.length; i++) {
            const cartItem = currShoppingCart.cart_items[i];

            if(cartItem.product.id === newCartItem.product_id) {
                let newQuantity;
                if((cartItem.quantity + parseInt(newCartItem.quantity, 10)) > 10) {
                    newQuantity = 10;
                } else {
                    newQuantity = parseInt(itemQuantity, 10) + cartItem.quantity
                }

                await dispatch(editItem({
                    cart_item_id: cartItem.id,
                    quantity: newQuantity,
                    user_id: currShoppingCart.user_id
                }));
                setItemQuantity(1)
                history.push(`/shoppingCart/${currShoppingCart.id}`)
                return;
            }
        }
        dispatch(addItem(newCartItem))
        setItemQuantity(1)
        history.push(`/shoppingCart/${currShoppingCart.id}`)
    }

    const filteredReviews = allReviews.filter(review => review?.product_id === parseInt(productId))

    return (
        <div >
            <div id="product-detail-div">

                <div id="left-detail-div">
                    <img id="product-image" src={`${product?.image_url}`} alt='Product-Details' />
                    <>{filteredReviews.length > 1 ? < h2 className='review-label'>{filteredReviews.length} reviews</h2> : '' }</>
                    <>{filteredReviews.length === 1 ? <h2 className='review-label'>{filteredReviews.length} review</h2>: '' }</>
                    <>{ filteredReviews.length === 0 ? < h2 className='review-label'>Be the first to Review!</h2> : ''}</>




                    <div id="product-review-heading">
                        <h4 id="product-review-h4">Buyers are raving! </h4>
                        <p id="product-review-p"> Multiple people gave positive reviews to this shop in the past 7 days.</p>
                    </div>

                    <h5 id="product-review-h5">Reviews for this item</h5>
                    <div id="line-div-gray"></div>

                    {allReviews && allReviews?.filter(review => review?.product_id === parseInt(productId)).map(review => (
                        <div id="review-content-div">
                            <div id='user-info-review'>
                                <img id="user-profile-image" src={`${stateUsers[review.user_id]?.image_url}`} alt='user' />
                                <p id="username-p-line">{stateUsers[review.user_id].username}</p>
                            </div>

                            <p className="title-p">{review?.title}</p>
                            <p className="content-p">{review?.content}</p>
                            {user &&
                                <div id="edit-delete-div">
                                    <NavLink hidden={review?.user_id !== user.id} to={`/reviews/${review?.id}/edit-reviews`} value={review?.id} className="edit-btn">Edit</NavLink>
                                    <button hidden={review?.user_id !== user.id} className="delete-btn" value={review?.id} onClick={handleReviewDelete} type="submit">Delete</button>
                                </div>
                            }
                        </div>
                    ))}

                    {user && !(product?.user_id === user?.id) &&
                        <AddReviewForm productId={productId} />}
                </div>

                <div id="right-detail-div">
                    <p id="developer-heading">Developer</p>
                    <p id="developer-name">{stateUsers[product?.user_id]?.username}</p>
                    <h2 id="product-name">{product?.name}</h2>
                    <p id ="category-label">Category: {category[product?.category_id - 1]?.name}</p>
                    <p id="product-price-p"> {`$${Number.parseFloat(product?.price).toFixed(2) }`}</p>
                    <p>Description: {product?.description}</p>
                    {!(product?.user_id === user?.id) &&
                        <div>
                            <form onSubmit={handleSubmit}>
                                <select
                                    id="select-detail-pg"
                                    onChange={e => setItemQuantity(e.target.value)}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                                <button id="add-to-cart-btn-detail" type='submit'>Add to cart</button>
                            </form>
                        </div>}
                    <NavLink className="edit-btn" hidden={user?.id === product?.user_id ? false : true} to={`/products/${product?.id}/edit-product`} value={product?.id} >Edit</NavLink>
                    <button className="delete-btn" hidden={user?.id === product?.user_id ? false : true} value={product?.id} onClick={handleDelete} type="submit">Delete</button>

                </div>

            </div>
        </div>
    );
}
export default ProductDetail;
