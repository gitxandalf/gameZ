import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCart } from '../../store/shoppingCart'

function OrderDetails() {
  const dispatch = useDispatch();
  const { checkedOutCartId } = useParams();
  const sessionUser = useSelector(state => state?.session?.user);
  const pastShoppingCarts = useSelector(state => state?.shoppingCart?.past_shopping_carts)
  const [loaded, setLoaded] = useState(false);
  let orderTotal = 0;

  useEffect(() => {
    dispatch(loadCart(sessionUser.id))
      .then(() => pastShoppingCarts.length ? setLoaded(true) : setLoaded(false))
    return () => setLoaded(false);
  }, [dispatch]);

  return (
    <>
      {loaded && pastShoppingCarts.length &&
        <div>
          <div>Thank You For Your Purchase!</div>
          <div>Order confirmation number #{checkedOutCartId}</div>
          {pastShoppingCarts
            .find(cart => cart.id === parseInt(checkedOutCartId, 10))
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
                    ${product.price * item.quantity}
                  </div>
                </div>
              )
            })}
          <div>
            Order Total: ${orderTotal}
          </div>
        </div>}
    </>
  )
}

export default OrderDetails;
