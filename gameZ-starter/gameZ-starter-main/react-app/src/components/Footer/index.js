
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <Link className="footer-links" to="https://www.linkedin.com/in/suhayl-khan-48601a193/">Suhayl Khan</Link>
            <Link className="footer-links" to="https://www.linkedin.com/in/jesse-brooks-8a6718229/">Jesse Brooks</Link>
            <Link className="footer-links" to="https://www.linkedin.com/in/alexander-gangemi/">Alexander Gangemi </Link>
            <Link className="footer-links" to="https://www.linkedin.com/in/eric-cortez-0101/">Eric Cortez</Link>
        </footer>
    );
}

export default Footer;
