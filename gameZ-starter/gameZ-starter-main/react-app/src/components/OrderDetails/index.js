import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { loadCart } from '../../store/shoppingCart'
import './OrderDetails.css';

function OrderDetails() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { checkedOutCartId } = useParams();
  const sessionUser = useSelector(state => state?.session?.user);
  const checkedOutCart = location.state
  const [loaded, setLoaded] = useState(false);
  let orderTotal = 0;

  useEffect(() => {
    dispatch(loadCart(sessionUser.id))
      .then(() => setLoaded(true))
    return () => setLoaded(false);
  }, [dispatch, sessionUser.id]);

  const totalCartItems = (shoppingCart) => {
    let total = 0;
    shoppingCart?.cart_items?.forEach(item => {
        total += item.quantity
    });
    return total;
  }

  return (
    <>
      {loaded && checkedOutCart &&
        <div>
          <div id='order-details-header'>
            <div>Thank You For Your Purchase!</div>
            <div className='order-details-confirmation'>Order confirmation number #{checkedOutCartId}</div>
          </div>
          <div className='order-details-details'>
            {checkedOutCart
              .cart_items
              .map(item => {
                const product = item.product
                orderTotal += (product.price * item.quantity)
                return (
                  <div className='order-details-item'>
                    <div className='order-details-name'>
                      {product.name}
                    </div>
                    <div>
                      x{item.quantity}
                    </div>
                    <div className='order-details-cost'>
                      <div className='details-cost-total'>
                        {`$${Number.parseFloat(product.price * item.quantity).toFixed(2)}`}
                      </div>
                      <div>
                        {`($${Number.parseFloat(product.price).toFixed(2)} each)`}
                      </div>
                    </div>
                  </div>
                )
              })}
            <div className='order-details-total'>
              {checkedOutCart && checkedOutCart.cart_items &&
                <div>
                  Order Total ({totalCartItems(checkedOutCart)} items)
                </div>}
              <div>
                {`$${Number.parseFloat(orderTotal).toFixed(2)}`}
              </div>
            </div>
            <button
              className='continue-shopping'
              onClick={() => history.push('/')}
              >Continue Shopping</button>
          </div>
        </div>}
    </>
  )
}

export default OrderDetails;
