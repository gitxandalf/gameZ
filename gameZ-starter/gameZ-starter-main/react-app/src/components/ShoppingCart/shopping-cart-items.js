import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem, loadCart, removeItem } from '../../store/shoppingCart';

function ShoppingCartItems({props}) {
  const dispatch = useDispatch();
  const { item, sessionUser } = props;
  const currProduct = item.product;
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [deleteItemId, setDeleteItemId] = useState('');
  const [deleteAlert, setDeleteAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuantity = parseInt(itemQuantity, 10);
    if(newQuantity <= 0 || typeof newQuantity !== 'number' || isNaN(newQuantity)) {
      newQuantity = item.quantity
      setItemQuantity(item.quantity)
    };

    const editedItem = {
        cart_item_id: item.id,
        quantity: newQuantity,
        user_id: sessionUser.id
    }
    dispatch(editItem(editedItem))
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

  return (
    <>
      {deleteAlert &&
        <div>
            <p>Are you sure you want to delete this item from your cart?</p>
            <button onClick={handleDelete} value='DELETETHISITEM'>Yes</button>
            <button onClick={handleDelete} value={false}>No</button>
        </div>}
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
            <form onSubmit={handleSubmit}>
              <input
                  key={item.quantity}
                  id={item.id}
                  className='quantity-input'
                  type='number'
                  placeholder={item.quantity}
                  value={itemQuantity}
                  onChange={e => setItemQuantity(e.target.value)}
                  onBlur={handleSubmit}></input>
            </form>
              Quantity: {item.quantity}
          </li>
          <li>
              Price: {currProduct.price * item.quantity} ({currProduct.price} each)
          </li>
          <button id={item.id} onClick={handleDelete} disabled={deleteAlert ? true : false}>DELETE</button>
      </ul>
    </>
  )
}

export default ShoppingCartItems;
