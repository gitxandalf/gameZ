import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { loadCart } from '../../store/shoppingCart'

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
  }, [dispatch]);

  return (
    <>
      {loaded && checkedOutCart &&
        <div>
          <div>Thank You For Your Purchase!</div>
          <div>Order confirmation number #{checkedOutCartId}</div>
          {checkedOutCart
            .cart_items
            .map(item => {
              const product = item.product
              orderTotal += (product.price * item.quantity)
              return (
                <div>
                  <div>
                    {product.name} x{item.quantity}
                  </div>
                  <div>
                    {`$${Number.parseFloat(product.price * item.quantity).toFixed(2)}`}
                  </div>
                </div>
              )
            })}
          <div>
            Order Total: {`$${Number.parseFloat(orderTotal).toFixed(2)}`}
          </div>

          <button onClick={() => history.push('/')}>Continue Shopping</button>
        </div>}
    </>
  )
}

export default OrderDetails;
