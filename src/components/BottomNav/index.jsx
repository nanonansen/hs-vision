import React, { useState } from "react";
import useEventListener from "../../useEventListener";

const BottomNav = () => {
    const [hideNav, setHideNav] = useState(true);

    let lastScrollTop = window.scrollY;

    const handleBottomNavVisibility = () => {
        if (lastScrollTop < window.scrollY) {
            // Scrolling Down

            // Hide Bottom Nav
            if (hideNav || window.scrollY > window.innerHeight) {
                setHideNav(true);
            }
        } else if (lastScrollTop > window.scrollY) {
            // Scrolling Up

            if (window.scrollY >= window.innerHeight) {
                // Show Bottom Nav
                setHideNav(false);
            } else if (window.scrollY <= window.innerHeight / 2) {
                // Hide Bottom Nav when close to Preheader
                setHideNav(true);
            }
        }
        lastScrollTop = window.scrollY;
    };

    useEventListener("scroll", handleBottomNavVisibility);
    return (
        <div
            className={hideNav ? "bottom-nav bottom-nav--hidden" : "bottom-nav"}
        >
            <div className="bottom-nav__inner">
                <button className="bottom-nav__item">Feed</button>
                <button className="bottom-nav__item">Browse</button>
                <button className="bottom-nav__item">Shop</button>
            </div>
        </div>
    );
};

export default BottomNav;
