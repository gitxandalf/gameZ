import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import "./AddProductForm.css"
import { postProduct } from '../../store/product'

const AddProductForm = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [categoryId, setCategoryId] = useState('1');
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state.session.user);
    const products = useSelector(state => state?.product?.entries);
    

    const onSubmit = async (e) => {
        e.preventDefault();
        if (user && errors.length === 0) {
            product = await dispatch(postProduct({ userId: user.id, categoryId, name, imageUrl, price, description }));
        } else {
            setDisplayErrors(true);
        }
        if (product) {
            history.push(`/products/${product.id}`);
        }
    };


    useEffect(() => {
        const errors = [];
        if (name === " " || name === "  ") errors.push("Please provide a valid name")
        if (!categoryId) errors.push("Please select a category")
        // if (/\s/g.test(name)) errors.push("Please provide a valid name")
        if (name?.length > 50 || name?.length <= 0) errors.push("Name must be less 50 characters")
        if (name && products.find(product =>  product.name === name)) errors.push("Game name already exists")
        if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
        if (!imageUrl?.includes("http" || "https")) errors.push("Please provide a valid image Url")
        if (!price) errors.push("Please provide a valid price")
        if (price <= 0) errors.push("You want to make money, right? Enter a price greater than 0.")
        if (description === " " || description === "  ") errors.push("Please provide a description")
        if (errors) setErrors(errors)

    }, [categoryId, name, imageUrl, price, description])

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
        <div id="edit-product-div">
            <form className="style-form-edit" onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}
                </div>
                <h2 id="form-h2"> List a game </h2>
                <div className='input-div'>
                    <label
                    className='input-label'
                    >Category</label>
                    <select
                        className='select-input'
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
                <div className='input-div'>
                    <label
                    className='input-label'
                    >Name</label>
                    <input
                        className='title-input'
                        placeholder='Your game name'
                        type='text'
                        name='name'
                        required
                        onChange={updateName}
                        value={name}
                    ></input>
                </div>
                <div className='input-div'>
                    <label
                    className='input-label'
                    >Image Url</label>
                    <input
                        className='title-input'
                        placeholder='Image Url'
                        type='text'
                        name='image_url'
                        required
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                </div>
                <div className='input-div'>
                    <label
                    className='input-label'
                    >Price</label>
                    <input
                        className='title-input'
                        placeholder='Name your price'
                        type='number'
                        name='price'
                        onChange={updatePrice}
                        value={price}
                    ></input>
                </div>
                <div >
                    <label
                    className='input-label'
                    >Description</label>
                    <textarea
                        placeholder='Description'
                        className='text-area'
                        type='text'
                        name='description'
                        required
                        // disabled={errors.length > 0}
                        onChange={updateDescription}
                        value={description}
                    ></textarea>
                </div>

                <div className='submit-btn-div'>
                    <button className="submit-btn" type='submit'>Sell This Game!</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
