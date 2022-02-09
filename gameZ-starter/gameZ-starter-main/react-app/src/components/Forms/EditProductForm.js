import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import "./EditProductForm.css"
import { updateProduct } from '../../store/product'


const EditProductForm = ({ products }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { productId } = useParams();

    const product = products.find(product => product.id === +productId)

    const user = useSelector(state => state.session.user);

    const [categoryId, setCategoryId] = useState(product?.category_id);
    const [name, setName] = useState(product?.name)
    const [imageUrl, setImageUrl] = useState(product?.image_url)
    const [price, setPrice] = useState(product?.price)
    const [description, setDescription] = useState(product?.description);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (!categoryId) errors.push("Please select a category.")
        if (name?.length > 50 || name?.length <= 0) errors.push("Name must be less than 50 characters.")
        if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url must be less than 255 characters.")
        if (!price || typeof price === "number") errors.push("Please provide a valid price.")

        setErrors(errors)
    }, [categoryId, name, imageUrl, price, description])

    const onSubmit = async (e) => {

        e.preventDefault();

        const updatedProduct = await dispatch(updateProduct({ userId: user.id, id: parseInt(productId), categoryId, name, imageUrl, price, description }));

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
            <form className="edit-product-form" onSubmit={onSubmit}>
                <div>
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
                        required
                        disabled={errors.length > 0}
                        onChange={updateDescription}
                        value={description}
                    ></textarea>
                </div>
                <button type='submit'>Sell This Updated Game!</button>
            </form>
        </div>
    );
};

export default EditProductForm;