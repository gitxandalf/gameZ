import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select'
import { editItem, loadCart, removeItem } from '../../store/shoppingCart';

function ShoppingCartItems({props}) {
  const dispatch = useDispatch();
  const { item, sessionUser } = props;
  const currProduct = item.product;
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [deleteItemId, setDeleteItemId] = useState('');
  const [deleteAlert, setDeleteAlert] = useState(false);
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
  }, [dispatch, itemQuantity])


  const handleSubmit = (e) => {
    // e.preventDefault();
    // let newQuantity = parseInt(itemQuantity, 10);
    // if(newQuantity <= 0 || typeof newQuantity !== 'number' || isNaN(newQuantity)) {
    //   newQuantity = item.quantity
    //   setItemQuantity(item.quantity)
    // };

    const editedItem = {
        cart_item_id: item.id,
        quantity: e.value,
        user_id: sessionUser.id
    }
    dispatch(editItem(editedItem))
    dispatch(loadCart(sessionUser.id))
    // setItemQuantity(e.target.value)
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

    console.log('Item.quantity - BEFORE =', item.quantity, 'GAME =', item.product.name)
    console.log('itemQuantity State - BEFORE =', itemQuantity, 'GAME =', item.product.name)
    dispatch(loadCart(sessionUser.id))
    console.log('Item.quantity - AFTER =', item.quantity)
    console.log('itemQuantity State - AFTER =', itemQuantity)
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
            {/* <form onSubmit={handleSubmit}>
              <input
                  id={item.id}
                  className='quantity-input'
                  type='number'
                  placeholder={item.quantity}
                  value={parseInt(itemQuantity, 10)}
                  onChange={e => setItemQuantity(e.target.value)}
                  ></input>
            </form> */}
              {/* <select
                value={itemQuantity}
                onChange={handleSubmit}
                >
                {quantities.map(quantity => {
                  return (
                    <option
                      key={quantity}
                    >{quantity}</option>
                  )
                })}
              </select> */}
              <form onSubmit={handleSubmit}>
                <Select options={quantities} onChange={e => handleSubmit(e)}>

                </Select>
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
