import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkoutCart, editItem, loadCart, removeItem } from '../../store/shoppingCart'
import ShoppingCartItems from '../ShoppingCart/shopping-cart-items';

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state?.session?.user);
  const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
  const [loaded, setLoaded] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState('');

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
    return () => setLoaded(false);
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


  const handleCheckout = () => {
    const currShoppingCartId = currShoppingCart.id
    dispatch(checkoutCart(currShoppingCart));
    dispatch(loadCart(sessionUser.id));
    history.push({
      pathname: `/shoppingCart/${currShoppingCartId}/orderDetails`,
      state: currShoppingCart
    });
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
              // <ShoppingCartItems props={{item, sessionUser}} />
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
                    {/* <input
                        key={item.quantity}
                        id={item.id}
                        className='quantity-input'
                        type='number'
                        placeholder={item.quantity}
                        defaultValue={item.quantity}
                        onInput={handleInput}></input> */}
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
                    Quantity: {item.quantity}
                </li>
                <li>
                    Price: {currProduct.price * item.quantity} ({currProduct.price} each)
                </li>
                <button id={item.id} onClick={handleDelete} disabled={deleteAlert ? true : false}>DELETE</button>
              </ul>
            )
          })}
          <button onClick={handleCheckout} disabled={currShoppingCart.cart_items.length === 0 ? true : false}>Confirm Checkout</button>
        </div>}
    </>
  )
};

export default Checkout;
