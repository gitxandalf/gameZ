import './ShoppingCartPreview.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function ShoppingCartPreview(){
    const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart)
    const products = useSelector(state => state?.product?.entries)
    let price = 0;
    return (
        <div className='shopping-cart-preview'>
            <h1>Shopping Cart Preview Component</h1>
            {currShoppingCart.cart_items?.map(item => {
                const currProduct = item.product;
                price += currProduct.price * item.quantity;
                return (<li>
                    Product Name: {currProduct.name}
                    Quantity: {item.quantity}
                    Price: {currProduct.price}
                </li>)
            })}
            <li>
                Cart Total: {price}
            </li>
            <button><NavLink to={`/shoppingCart/${currShoppingCart.id}`}>More Details</NavLink></button>
        </div>
    )
};

export default ShoppingCartPreview;
