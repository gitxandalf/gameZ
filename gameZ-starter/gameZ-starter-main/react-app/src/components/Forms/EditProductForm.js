import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams, Link } from 'react-router-dom';
import "./EditProductForm.css"
import { updateProduct } from '../../store/product'


const EditProductForm = ({ products }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { productId } = useParams();
    let updatedProduct;
    const product = products.find(product => product.id === +productId)

    const user = useSelector(state => state.session.user);

    const [categoryId, setCategoryId] = useState(product?.category_id);
    const [name, setName] = useState(product?.name)
    const [imageUrl, setImageUrl] = useState(product?.image_url)
    const [price, setPrice] = useState(product?.price)
    const [description, setDescription] = useState(product?.description);
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);

    useEffect(() => {
        const errors = [];
        if (!categoryId) errors.push("Please select a category")
        if (name?.length > 50 || name?.length <= 0) errors.push("Name must be less 50 characters")
        if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
        if (!price) errors.push("Please provide a valid price")
        if (price <= 0) errors.push("You want to make money, right? Enter a price greater than 0.")

        if (errors) setErrors(errors)

    }, [categoryId, name, imageUrl, price, description])

    const onSubmit = async (e) => {

        e.preventDefault();

        if (errors.length === 0 ){
            updatedProduct = await dispatch(updateProduct({ userId: user.id, id: parseInt(productId), categoryId, name, imageUrl, price, description }));
        } else {
            setDisplayErrors(true);
        }

        if (updatedProduct) {
            history.push(`/products/${product?.id}`)
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


    return (
        <div id="edit-product-div">
            <form className="style-form-edit" onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <h2 id="form-h2"> Edit game </h2>
                <div className='input-div'>
                    <label className='input-label'>Category</label>
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
                    <label className='input-label'>Name</label>
                    <input
                        className='title-input'
                        type='text'
                        name='name'
                        required
                        onChange={updateName}
                        value={name}
                    ></input>
                </div>
                <div className='input-div'>
                    <label className='input-label'>Image Url</label>
                    <input
                        className='title-input'
                        type='text'
                        name='image_url'
                        required
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                </div>
                <div className='input-div'>
                    <label className='input-label'>Price</label>
                    <input
                        className='title-input'
                        type='number'
                        name='price'
                        onChange={updatePrice}
                        value={price}
                    ></input>
                </div>
                <div className='input-div'>
                    <label className='input-label'>Description</label>
                    <textarea
                        className='text-area'
                        type='text'
                        name='description'
                        required
                        onChange={updateDescription}
                        value={description}
                    ></textarea>
                </div>
                <div className='submit-btn-div'>
                    <button
                    className="submit-btn"
                    // disabled={errors.length > 0}
                    type='submit'>Sell This Updated Game!</button>
                </div>

                <div className='submit-btn-div'>
                    <Link className="submit-btn" to={`/products/${productId}`}>Cancel</Link>
                </div>

            </form>
        </div>
    );
};

export default EditProductForm;
