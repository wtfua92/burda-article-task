import React, {useState, useEffect, useCallback} from 'react';
import useHeaderClassname from "../../utils/hooks/useHeaderClass";

import './header.scss';

function Header() {
    const [prevScrollTop, setPrevScrollTop] = useState(0);
    const [scrollDown, setScrollDown] = useState(true);
    const [isBottom, setIsBottom] = useState(false);
    let className = useHeaderClassname(scrollDown, isBottom);

    const scrollHandler = useCallback(() => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollDown(prevScrollTop < currentScrollTop);
        setIsBottom(currentScrollTop + window.innerHeight + 5 >
            document.documentElement.scrollHeight);
        setPrevScrollTop(currentScrollTop);
    }, [prevScrollTop]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    return (
        <header className={className}>
            <a href="#" className="header__label">
                <h1>Burda</h1>
            </a>
            <nav className="header__links">
                <a href="#" className="header__link">Home</a>
                <a href="#" className="header__link">About us</a>
                <a href="#" className="header__link">Contacts</a>
            </nav>
        </header>
    );
}

export default Header;