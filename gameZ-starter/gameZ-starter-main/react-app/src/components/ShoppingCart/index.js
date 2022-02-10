import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editItem, loadCart, removeItem } from '../../store/shoppingCart'
import './ShoppingCart.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState('');
    const [deleteAlert, setDeleteAlert] = useState(false);
    const cartItems = useSelector(state => state?.shoppingCart?.cartItems);
    const products = useSelector(state => state?.product?.entries);
    let price = 0;

    useEffect(() => {
        if(loaded) dispatch(loadCart(cartItems.shopping_cart.id));
        setLoaded(true);
    }, [dispatch]);

    const handleInput = (e) => {
        e.preventDefault();
        if(e.target.value <= 0) {
            e.target.value = 1;
        }

        const item = {
            cart_item_id: e.target.id,
            quantity: e.target.value
        }
        dispatch(editItem(item))
        dispatch(loadCart(cartItems.shopping_cart.id))
    }
    const handleDelete = (e) => {
        e.preventDefault();
        if(!deleteAlert) {
            setDeleteItemId(e.target.id);
            setDeleteAlert(true);
            return
        }

        if(deleteAlert && e.target.value === 'DELETETHISITEM') {
            dispatch(removeItem(deleteItemId));
        }

        setDeleteAlert(false);
        setDeleteItemId('');
        return
    }

    return (
        <div>
            <h1>SHOPPING CART</h1>
            {deleteAlert &&
                <div>
                    <p>Are you sure you want to delete this item from your cart?</p>
                    <button onClick={handleDelete} value='DELETETHISITEM'>Yes</button>
                    <button onClick={handleDelete} value={false}>No</button>
                </div>}
            {cartItems && cartItems.cart_items?.map(item => {
                const currProduct = products.find(product => item.product_id === product.id);
                price += currProduct.price * item.quantity;
                return (
                    <ul>
                        <li>
                            ProductImage: {currProduct.image_url}
                        </li>
                        <li>
                            Product Name: {currProduct.name}
                        </li>
                        <li>
                            Category: {currProduct.category_id}
                        </li>
                        <li>
                            UserImageUrl /
                            User: {currProduct.user_id}
                        </li>
                        <li>
                            Description: {currProduct.description}
                        </li>
                        <li>
                            <input
                                key={item.quantity}
                                id={item.id}
                                className='quantity-input'
                                type='number'
                                placeholder={item.quantity}
                                defaultValue={item.quantity}
                                onInput={handleInput}></input>
                            Quantity: {item.quantity}
                        </li>
                        <li>
                            Price: {currProduct.price}
                        </li>
                        <button id={item.id} onClick={handleDelete} disabled={deleteAlert ? true : false}>DELETE</button>
                    </ul>)
            })}
            <li>
                Cart Total: {price}
            </li>
        </div>
    )
}

export default ShoppingCart;
