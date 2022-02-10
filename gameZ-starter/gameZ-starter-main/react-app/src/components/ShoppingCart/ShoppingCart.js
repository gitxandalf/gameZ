import shoppingCartIcon from '../../images/shopping-cart.png'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadCart } from '../../store/shoppingCart'
function ShoppingCart({ props }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    // const [preview, setPreview] = useState(false)

    useEffect(() => {
        dispatch(loadCart(user.id))
    })

    // const handleClick = () => {
    //     if (preview) setPreview(False)
    //     else setPreview(True)
    // }
    console.log(props)
    return (
        <img src={shoppingCartIcon}
            onClick={props}></img>
    )
}

export default ShoppingCart;
