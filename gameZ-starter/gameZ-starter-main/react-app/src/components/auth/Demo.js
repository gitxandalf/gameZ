import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'

const Demo = () => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        const credential = 'demo@aa.io';
        const password = 'test'
        dispatch(sessionActions.login(credential, password))
            .catch(async (res) => {
                 return await res.json()
            });
    }

    return (
        <button id="demo-btn" onClick={handleClick} type='submit'>Demo</button>
    )
}

export default Demo;
