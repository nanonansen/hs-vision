import React, { useState } from "react";
import useEventListener from "../../useEventListener";
import Logo from "../Logo";

const Header = () => {
    const [hideNav, setHideNav] = useState(false);
    let lastScrollTop = window.scrollY;

    const handleHeaderNavVisibility = () => {
        if (lastScrollTop < window.scrollY) {
            // Scrolling Down

            // Hide Header Nav
            if (window.scrollY > window.innerHeight) {
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
    useEventListener("scroll", handleHeaderNavVisibility);

    return (
        <header
            className={
                hideNav
                    ? "site-header site-header--sticky hidden"
                    : "site-header site-header--sticky"
            }
        >
            <div className="branding">
                <h1 className="logo">
                    <Logo />
                </h1>
            </div>
        </header>
    );
};

export default Header;
