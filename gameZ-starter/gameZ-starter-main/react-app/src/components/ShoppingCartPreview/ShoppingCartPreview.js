import './ShoppingCartPreview.css'
import { useSelector } from 'react-redux'

function ShoppingCartPreview(){
    const cartItems = useSelector(state => state?.shoppingCart?.cartItems)
    const products = useSelector(state => state?.product?.entries)
    let price;
    return (
        <div className='shopping-cart-preview'>
            <h1>Shopping Cart Preview Component</h1>
            {cartItems.cart_items?.map(item => {
                const currProduct = products.find(product => item.product_id === product.id);
                price += currProduct.price;
                return (<li>
                    Product Name: {currProduct.name}
                    Quantity: {item.quantity}
                    Price: {currProduct.price}
                </li>)
            })}
            <li>
                Cart Total:
            </li>
        </div>
    )
};

export default ShoppingCartPreview;
