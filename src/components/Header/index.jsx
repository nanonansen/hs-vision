import React, { useState } from "react";
import useEventListener from "../../useEventListener";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import Icon from "../Icon";

const Header = () => {
    const [hideNav, setHideNav] = useState(false);
    const [showNav, setShowNav] = useState(false);
    let lastScrollTop = window.scrollY;

    const handleHeaderNavVisibility = () => {
        if (lastScrollTop < window.scrollY) {
            // Scrolling Down

            // Hide Header Nav
            if (window.scrollY > window.innerHeight && !showNav) {
                setHideNav(true);
            }
        } else if (lastScrollTop > window.scrollY) {
            // Scrolling Up

            if (window.scrollY >= window.innerHeight) {
                // Show Bottom Nav
                setHideNav(false);
            }
        }
        lastScrollTop = window.scrollY;
    };

    const handleNavMenu = () => {
        setHideNav(false);
        setShowNav(!showNav);
        if (!showNav) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
    };
    useEventListener("scroll", handleHeaderNavVisibility);

    return (
        <header
            className={
                hideNav
                    ? "site-header site-header--sticky hidden"
                    : "site-header site-header--sticky"
            }
        >
            <div className="site-header__inner">
                <div className="site-header__menu">
                    <button onClick={handleNavMenu}>
                        <Icon name={showNav ? "close" : "menu"} />
                    </button>
                </div>
                <div className="branding">
                    <h1 className="logo">
                        <Logo />
                    </h1>
                </div>
                <div className="site-header__cart">
                    <button>1</button>
                </div>
            </div>
            <NavMenu showNav={showNav} />
        </header>
    );
};

export default Header;
