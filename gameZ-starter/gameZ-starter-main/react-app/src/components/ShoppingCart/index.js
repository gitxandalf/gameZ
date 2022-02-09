import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editItem, loadCart } from '../../store/shoppingCart'
import './ShoppingCart.css'

function ShoppingCart() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const cartItems = useSelector(state => state?.shoppingCart?.cartItems);
    const products = useSelector(state => state?.product?.entries);
    let price = 0;

    useEffect(() => {
        if(loaded) dispatch(loadCart(cartItems.shopping_cart.id));
        setLoaded(true);
    }, [dispatch]);

    const handleBlur = (e) => {
        e.preventDefault();
        const item = {
            cart_item_id: e.target.id,
            quantity: e.target.value
        }
        dispatch(editItem(item))
        dispatch(loadCart(cartItems.shopping_cart.id))
    }

    return (
        <div>
            <h1>SHOPPING CART</h1>
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
                                id={currProduct.id}
                                type='number'
                                placeholder={item.quantity}
                                defaultValue={item.quantity}
                                onBlur={handleBlur}></input>
                            Quantity: {item.quantity}
                        </li>
                        <li>
                            Price: {currProduct.price}
                        </li>
                    </ul>)
            })}
            <li>
                Cart Total: {price}
            </li>
        </div>
    )
}

export default ShoppingCart;
