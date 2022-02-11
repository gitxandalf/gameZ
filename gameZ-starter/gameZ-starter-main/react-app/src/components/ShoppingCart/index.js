import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editItem, loadCart, removeItem } from '../../store/shoppingCart'
import { getCategories } from '../../store/category';
import ShoppingCartItems from './shopping-cart-items';
import './ShoppingCart.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState('');
    const [deleteAlert, setDeleteAlert] = useState(false);
    const sessionUser = useSelector(state => state?.session?.user)
    const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
    // const products = useSelector(state => state?.product?.entries);
    let price = 0;

    useEffect(() => {
        dispatch(loadCart(sessionUser.id))
            .then(() => setLoaded(true));
        dispatch(getCategories())
    }, [dispatch]);

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     if(e.target.value <= 0) {
    //         e.target.value = 1;
    //     }

    //     const item = {
    //         cart_item_id: e.target.id,
    //         quantity: e.target.value,
    //         user_id: sessionUser.id
    //     }
    //     dispatch(editItem(item))
    //     dispatch(loadCart(sessionUser.id))
    // }

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     if(!deleteAlert) {
    //         setDeleteItemId(e.target.id);
    //         setDeleteAlert(true);
    //         return
    //     }

    //     if(deleteAlert && e.target.value === 'DELETETHISITEM') {
    //         dispatch(removeItem({cart_item_id: deleteItemId, user_id: sessionUser.id}));
    //     }

    //     setDeleteAlert(false);
    //     setDeleteItemId('');
    //     return
    // }

    return (
        <div>
            <h1>SHOPPING CART</h1>
            {/* {deleteAlert &&
                <div>
                    <p>Are you sure you want to delete this item from your cart?</p>
                    <button onClick={handleDelete} value='DELETETHISITEM'>Yes</button>
                    <button onClick={handleDelete} value={false}>No</button>
                </div>} */}
            {currShoppingCart && currShoppingCart.cart_items?.map(item => {
                const currProduct = item.product;
                price += currProduct.price * item.quantity;
                return (
                    <ShoppingCartItems props={{item, sessionUser}} />
                    // <ul>
                    //     <li>
                    //         ProductImage: {currProduct.image_url}
                    //     </li>
                    //     <li>
                    //         Product Name: {currProduct.name}
                    //     </li>
                    //     <li>
                    //         Category: {currProduct.category_id}
                    //     </li>
                    //     <li>
                    //         UserImageUrl /
                    //         User: {currProduct.user_id}
                    //     </li>
                    //     <li>
                    //         Description: {currProduct.description}
                    //     </li>
                    //     <li>
                    //         <input
                    //             key={item.quantity}
                    //             id={item.id}
                    //             className='quantity-input'
                    //             type='number'
                    //             placeholder={item.quantity}
                    //             value={item.quantity}
                    //             onChange={handleInput}></input>
                    //         Quantity: {item.quantity}
                    //     </li>
                    //     <li>
                    //         Price: {currProduct.price * item.quantity} ({currProduct.price} each)
                    //     </li>
                    //     <button id={item.id} onClick={handleDelete} disabled={deleteAlert ? true : false}>DELETE</button>
                    // </ul>
                )
            })}
            <li>
                Cart Total: {price}
            </li>
            {currShoppingCart && currShoppingCart.cart_items && (currShoppingCart.cart_items.length > 0) &&
                <button onClick={(e) => {
                    e.preventDefault()
                    history.push(`/shoppingCart/${currShoppingCart.id}/checkout`)
                }}>Checkout</button>}
        </div>
    )
}

export default ShoppingCart;
