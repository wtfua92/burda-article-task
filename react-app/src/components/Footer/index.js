import React from 'react';
import './footer.scss';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>&copy; Burda Media, {year} </span>
        </footer>
    );
}

export default Footer;