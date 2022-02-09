import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch()

    const allCategories = useSelector(state => state.category.entries)
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div id="home-page">

            <div className='categories'>

                <h1>Categories</h1>

                <div className='category-links'>{allCategories && allCategories?.map((category) => (
                    <div key={category?.id}>
                        <Link key={category?.id} to={`/categories/${category?.id}/products`}>{category?.name}</Link>
                    </div>
                ))}</div>

            </div>

            <div className='site-info'>

                <div className='site-info-header'>
                    <h2>What is GameZ?</h2>
                    <p>Read our wonderfully weird story</p>
                </div>

                <div className='community'>
                    <h3>A community doing good</h3>
                    <p>
                        GameZ is a global online marketplace, where people come together to make, sell, buy, and collect unique games.
                        We’re also a community pushing for positive change for small businesses, people, and the planet.
                        Here are some of the ways we’re making a positive impact, together.
                    </p>
                </div>

                <div className='support'>
                    <h3>Support independent creators</h3>
                    <p>
                        There’s no GameZ warehouse – just millions of people selling the things they love.
                        We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                    </p>
                </div>

                <div className='peace'>
                    <h3>Peace of mind</h3>
                    <p>Your privacy is the highest priority of our dedicated team.
                        And if you ever need assistance, we are always ready to step in for support.</p>
                </div>

                <div className='site-info-footer'>
                    <h4>Have a question? Well, we’ve got some answers.</h4>
                    <button>Go to Help Center</button>
                </div>

            </div>

        </div>
    );
}
export default HomePage;
