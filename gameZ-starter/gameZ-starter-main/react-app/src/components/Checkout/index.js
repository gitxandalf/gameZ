import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart } from '../../store/shoppingCart';

function Checkout() {
  const dispatch = useDispatch()
  const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(loaded) dispatch(loadCart(currShoppingCart.user_id));
    setLoaded(true);
  }, [dispatch])

  const calcTotalPrice = shoppingCart => {
    let price = 0;
    console.log(shoppingCart.cart_items)
    shoppingCart.cart_items.forEach(item => {
      price += item.product.price * item.quantity
    })
    return price;
  }

  return (
    <>
      {currShoppingCart && currShoppingCart.cart_items &&
        <div>
          <h1>CHECKOUT</h1>
          <div>
            Order summary
            <div>
              Order Total ({currShoppingCart.cart_items.length} items): {calcTotalPrice(currShoppingCart)}
            </div>
          </div>
          {currShoppingCart.cart_items.map(item => {
            const currProduct = item.product;
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
              </ul>
            )
          })}
        </div>}
    </>
  )
};

export default Checkout;
