import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getCategories } from '../../store/category';
import { getProducts } from '../../store/product';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch()

    const allProducts = useSelector(state => state?.product?.entries)
    const allCategories = useSelector(state => state.category.entries)
    const sessionUser = useSelector(state => state.session.user);

    console.log("ALL PRODS", allProducts[0]?.id)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div id="home-page">
            <div className='home-header-bg'></div>
            <p className='home-header'>Games Our Authors Love!</p>
            <div className='games-we-love'>
                <figure className='games-we-love-figure'>
                    <Link className="games-we-love-link" key={allProducts[0]?.id} to={`/products/1`}><img key={allProducts[0]?.id} className='games-we-love-image' src={allProducts[0]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/1`}>Subnautica: Below Zero</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[1]?.id} to={`/products/2`}><img key={allProducts[1]?.id} className='games-we-love-image' src={allProducts[1]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/2`}>Valheim</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[2]?.id} to={`/products/3`}><img key={allProducts[2]?.id} className='games-we-love-image' src={allProducts[2]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/3`}>Darkest Dungeon</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[3]?.id} to={`/products/4`}><img key={allProducts[3]?.id} className='games-we-love-image' src={allProducts[3]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/4`}>Black Book</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[4]?.id} to={`/products/5`}><img key={allProducts[4]?.id} className='games-we-love-image' src={allProducts[4]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/5`}>Kenshi</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[5]?.id} to={`/products/6`}><img key={allProducts[5]?.id} className='games-we-love-image' src={allProducts[5]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/6`}>Loop Hero</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[6]?.id} to={`/products/7`}><img key={allProducts[6]?.id} className='games-we-love-image' src={allProducts[6]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/7`}>Children of Morta</Link></figcaption>
                </figure>
                <figure>
                    <Link className="games-we-love-link" key={allProducts[7]?.id} to={`/products/8`}><img key={allProducts[7]?.id} className='games-we-love-image' src={allProducts[7]?.image_url}></img></Link>
                    <figcaption className='fig-caption'><Link to={`/products/8`}>The Falconeer</Link></figcaption>
                </figure>
            </div>

            <div className='site-info-header'>
                <h2>What is GameZ?</h2>
                <a href="https://github.com/gitxandalf/gameZ/wiki">Read our wonderfully weird story.</a>
            </div>

            <div className='site-info'>


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


            </div>

            <div className='site-info-footer'>
                <h4>Have a question? Well, we’ve got some answers.</h4>
                <a href="https://github.com/gitxandalf/gameZ/blob/main/README.md">Go to Help Center</a>
            </div>

        </div >
    );
}
export default HomePage;
