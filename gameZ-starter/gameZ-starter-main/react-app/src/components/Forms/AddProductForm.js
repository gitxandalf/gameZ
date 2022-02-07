import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import "./AddProductForm.css"
import addProduct from '../../store/product'

const AddProductForm = () => {
    const [errors, setErrors] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let product;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            product = await dispatch(addProduct(user.id, categoryId, name, imageUrl, price, description));
            if (product) {
                setErrors(product)
            }
        }
    };

    const updateCategory = (e) => {
        setCategoryId(e.target.value);
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };



    if (user) {
        return <Redirect to={`/products/${product.id}`} />;
    }

    return (
        <div id="add-product-div">
            <form className="add-product-form" onSubmit={onSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Category</label>
                    <select
                        type='dropdown'
                        name='category'
                        onChange={updateCategory}
                        value={categoryId}>
                        <option value="1">Role-Playing Game</option>
                        <option value="2">First Person Shooter</option>
                    </select>
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={updateName}
                        value={name}
                    ></input>
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        type='text'
                        name='image_url'
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type='number'
                        name='price'
                        onChange={updatePrice}
                        value={price}
                    ></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        type='text'
                        name='description'
                        onChange={updateDescription}
                        value={description}
                    ></textarea>
                </div>
                <button type='submit'>Sell This Game!</button>
            </form>
        </div>
    );
};

export default AddProductForm;
