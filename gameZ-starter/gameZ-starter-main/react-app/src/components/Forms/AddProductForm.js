import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import "./AddProductForm.css"
import { postProduct } from '../../store/product'

const AddProductForm = () => {
    const history = useHistory()

    const [errors, setErrors] = useState([]);
    const [categoryId, setCategoryId] = useState('1');
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (user) {
            product = await dispatch(postProduct({ userId: user.id, categoryId, name, imageUrl, price, description }));
        }
        if (product) {

            history.push(`/products/${product.id}`);
        }
    };

    // useEffect(() => {
    //     const errors = [];
    //     if (!categoryId) errors.push("Please select a category")
    //     if (name?.length > 50 || name?.length <= 0) errors.push("Name must be less 50 characters")
    //     if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
    //     if (!price) errors.push("Please provide a valid price")
    //     if (price < 0) errors.push("You want to make money, right?")

    //     if (product.errors) setErrors(errors)

    // }, [categoryId, name, imageUrl, price, description])

    let product;


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


    return (
        <div id="add-product-div">
            <form className="add-product-form" onSubmit={onSubmit}>
                <div className='add-product-errors'>
                    {errors && errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Category</label>
                    <select
                        type='dropdown'
                        name='category'
                        required
                        onChange={updateCategory}
                        value={categoryId}>
                        <option value="1">Role-Playing Game</option>
                        <option value="2">First Person Shooter</option>
                        <option value="3">Platformer</option>
                        <option value="4">Horror</option>
                        <option value="5">Simulation</option>
                        <option value="6">Fighting</option>
                    </select>
                </div>
                <div>
                    <label>Name</label>
                    <input
                        placeholder='Your game name'
                        type='text'
                        name='name'
                        required
                        onChange={updateName}
                        value={name}
                    ></input>
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        placeholder='Image Url'
                        type='text'
                        name='image_url'
                        required
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                </div>
                <div>
                    <label>Price</label>
                    <input
                        placeholder='Name your price'
                        type='number'
                        name='price'
                        onChange={updatePrice}
                        value={price}
                    ></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        placeholder='Description'
                        className='text-area'
                        type='text'
                        name='description'
                        required
                        disabled={errors.length > 0}
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
