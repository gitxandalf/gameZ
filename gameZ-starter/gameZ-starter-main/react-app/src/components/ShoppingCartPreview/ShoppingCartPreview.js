import './ShoppingCartPreview.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function ShoppingCartPreview(){
    const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart)
    let price = 0;
    return (
        <div id='shopping-cart-preview'>
            <h1 id='cart-preview-title'>Your Shopping Cart</h1>
            {currShoppingCart.cart_items?.map(item => {
                const currProduct = item.product;
                price += currProduct.price * item.quantity;
                return (
                    <div className='cart-preview-listing'>
                        <div className='preview-listing-name'>
                            {currProduct.name}
                        </div>
                        <div className='preview-listing-price'>
                           {`$${Number.parseFloat(currProduct.price).toFixed(2)}`} <span>x {item.quantity}</span>
                        </div>
                    </div>
                )
            })}
            <div id='cart-preview-total'>
                Cart Total: {`$${Number.parseFloat(price).toFixed(2)}`}
            </div>
            <button id='cart-preview-button'><NavLink to={`/shoppingCart/${currShoppingCart.id}`}>More Details</NavLink></button>

        </div>
    )
};

export default ShoppingCartPreview;
