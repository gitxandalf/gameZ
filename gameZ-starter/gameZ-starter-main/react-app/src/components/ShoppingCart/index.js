import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editItem, loadCart, removeItem } from '../../store/shoppingCart'
import { getCategories } from '../../store/category';
import './ShoppingCart.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState('');
    const [deleteAlert, setDeleteAlert] = useState(false);
    const sessionUser = useSelector(state => state?.session?.user);
    const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
    const categories = useSelector(state => state?.category?.entries);
    const products = useSelector(state => state?.product);
    let price = 0;

    const quantities = [
        {label: 1, value: 1},
        {label: 2, value: 2},
        {label: 3, value: 3},
        {label: 4, value: 4},
        {label: 5, value: 5},
        {label: 6, value: 6},
        {label: 7, value: 7},
        {label: 8, value: 8},
        {label: 9, value: 9},
        {label: 10, value: 10}
      ];

    useEffect(() => {
        dispatch(loadCart(sessionUser.id))
            .then(() => setLoaded(true));
        dispatch(getCategories())
    }, [dispatch]);

    const handleInput = (e) => {
        const item = {
            cart_item_id: e.target.id,
            quantity: e.target.value,
            user_id: sessionUser.id
        }
        dispatch(editItem(item))
        dispatch(loadCart(sessionUser.id))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if(!deleteAlert) {
            setDeleteItemId(e.target.id);
            setDeleteAlert(true);
            return
        }

        if(deleteAlert && e.target.value === 'DELETETHISITEM') {
            dispatch(removeItem({cart_item_id: deleteItemId, user_id: sessionUser.id}));
        }

        setDeleteAlert(false);
        setDeleteItemId('');
        return
    }

    const totalCartItems = (shoppingCart) => {
        let total = 0;
        shoppingCart?.cart_items?.forEach(item => {
            total += item.quantity
        });
        return total;
    }

    return (
        <div>
            {currShoppingCart && currShoppingCart.cart_items &&
                <div className='cart-total-items'>{totalCartItems(currShoppingCart)} items in your cart</div>}

            {deleteAlert &&
                <div className='cart-remove-item'>
                    <div className='remove-item-text'>Are you sure you want to delete this item from your cart?</div>
                    <div className='remove-item-buttons'>
                        <button className='confirm-remove' onClick={handleDelete} value='DELETETHISITEM'>Yes</button>
                        <button className='reject-remove' onClick={handleDelete} value={false}>No</button>
                    </div>
                </div>}

            <div className='shopping-cart-all'>
                <div className='shopping-cart-listings'>
                    {currShoppingCart && currShoppingCart?.cart_items?.map(item => {
                        const currProduct = item.product;
                        price += currProduct.price * item.quantity;
                        return (
                            <ul className='cart-item-ul'>
                                <li className='cart-item-developer'>
                                    {products.usersEntries[currProduct.user_id].username}
                                </li>
                                <li className='cart-item-details'>
                                    <div className='item-details-image'>
                                        <img src={currProduct.image_url} />
                                    </div>
                                    <div className='item-details-all'>
                                        <div className='item-details-name'>
                                            {currProduct.name}
                                        </div>
                                        <div className='item-details-category'>
                                            {categories?.find(category => category.id === currProduct.category_id)?.name}
                                        </div>
                                        <div className='item-details-description'>
                                            {currProduct.description}
                                        </div>
                                        <button
                                            id={item.id}
                                            className='item-details-remove'
                                            onClick={handleDelete}
                                            disabled={deleteAlert ? true : false}
                                            >Remove</button>
                                    </div>
                                    <div className='cart-item-select'>
                                        <select
                                            key={item.quantity}
                                            id={item.id}
                                            onChange={handleInput}
                                        >
                                            {quantities.map(opt => {
                                                return (
                                                    <option
                                                        selected={item.quantity === opt.value ? true : false}
                                                        value={opt.value}>{opt.label}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='cart-item-price'>
                                        <div className='item-price-total'>
                                            ${currProduct.price * item.quantity}
                                        </div>
                                        <div className='item-price-each'>
                                            (${currProduct.price} each)
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                {currShoppingCart && currShoppingCart.cart_items &&
                    <div className='shopping-cart-checkout'>
                        <div className='cart-checkout-panel'>
                            <div className='checkout-panel-details'>
                                <div>
                                    Total ({totalCartItems(currShoppingCart)} items)
                                </div>
                                <div>
                                    ${price}
                                </div>
                            </div>
                            {currShoppingCart && currShoppingCart.cart_items && (currShoppingCart.cart_items.length > 0) &&
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    history.push(`/shoppingCart/${currShoppingCart.id}/checkout`)
                                }}>Proceed to checkout</button>}
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ShoppingCart;
