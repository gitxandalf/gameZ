import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkoutCart, editItem, loadCart, removeItem } from '../../store/shoppingCart'
import { getCategories } from '../../store/category';
import './Checkout.css';

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state?.session?.user);
  const currShoppingCart = useSelector(state => state?.shoppingCart?.current_shopping_cart);
  const products = useSelector(state => state?.product);
  const categories = useSelector(state => state?.category?.entries);
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
    dispatch(getCategories())
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
          <div className='cart-total-items'>Double check your order details</div>
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
                return (
                  <ul className='cart-item-ul'>
                    <li className='cart-item-developer'>
                      {products.usersEntries[currProduct.user_id].username}
                    </li>
                    <li className='cart-item-details'>
                      <div className='item-details-image'>
                          <img src={currProduct.image_url}/>
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
                              {`$${Number.parseFloat(currProduct.price * item.quantity).toFixed(2)}`}
                          </div>
                          <div className='item-price-each'>
                              {`($${Number.parseFloat(currProduct.price).toFixed(2)} each)`}
                          </div>
                      </div>
                    </li>
                  </ul>
                )
              })}
            </div>
            <div className='shopping-cart-checkout'>
              <div className='cart-checkout-panel'>
                <div className='checkout-panel-title'>
                  Order summary
                </div>
                <div className='checkout-panel-details'>
                  <div>
                    Order Total ({calcTotalItems(currShoppingCart)} items)
                  </div>
                  <div>
                    {`$${Number.parseFloat(calcTotalPrice(currShoppingCart)).toFixed(2)}`}
                  </div>
                </div>
                <button onClick={handleCheckout} disabled={currShoppingCart.cart_items.length === 0 ? true : false}>Confirm Checkout</button>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
};

export default Checkout;
