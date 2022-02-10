import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutCart, editItem, loadCart, removeItem } from '../../store/shoppingCart'

function Checkout() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state?.session?.user);
  const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
  const [loaded, setLoaded] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState('');

  useEffect(() => {
    if(loaded) dispatch(loadCart(currShoppingCart.user_id));
    setLoaded(true);
  }, [dispatch])

  const calcTotalPrice = shoppingCart => {
    let price = 0;
    shoppingCart.cart_items.forEach(item => {
      price += item.product.price * item.quantity
    })
    return price;
  }

  const calcTotalItems = shoppingCart => {
    let quantity = 0;
    shoppingCart.cart_items.forEach(item => {
      quantity += item.quantity
    })
    return quantity;
  }

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
    dispatch(loadCart(currShoppingCart.user_id))
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

  const handleCheckout = () => {
    dispatch(checkoutCart(currShoppingCart));
    dispatch(loadCart(sessionUser.id));
  }

  return (
    <>
      {currShoppingCart && currShoppingCart.cart_items &&
        <div>
          <h1>CHECKOUT</h1>
          <div>
            Order summary
            <div>
              Order Total ({calcTotalItems(currShoppingCart)} items): {calcTotalPrice(currShoppingCart)}
            </div>
          </div>
          {deleteAlert &&
            <div>
                <p>Are you sure you want to delete this item from your cart?</p>
                <button onClick={handleDelete} value='DELETETHISITEM'>Yes</button>
                <button onClick={handleDelete} value={false}>No</button>
            </div>}
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
                    Price: {currProduct.price * item.quantity} ({currProduct.price} each)
                </li>
                <button id={item.id} onClick={handleDelete} disabled={deleteAlert ? true : false}>DELETE</button>
              </ul>
            )
          })}
          <button onClick={handleCheckout}>Confirm Checkout</button>
        </div>}
    </>
  )
};

export default Checkout;
