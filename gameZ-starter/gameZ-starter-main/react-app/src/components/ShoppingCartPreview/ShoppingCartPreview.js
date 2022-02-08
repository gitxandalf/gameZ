import './ShoppingCartPreview.css'
import { useSelector } from 'react-redux'

function ShoppingCartPreview(){
    const cartItems = useSelector(state => state?.shoppingCart?.cartItems)
    // const products = useSelector(state => state?.)

    return (
        <div className='shopping-cart-preview'>
            <h1>Shopping Cart Preview Component</h1>
            {/* {cartItems.map(item => {
                <li>
                    Product Name: {item.product}
                </li>
            })} */}
        </div>

    )
};

export default ShoppingCartPreview;
