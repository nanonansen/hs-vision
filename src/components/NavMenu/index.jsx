import React from "react";

const NavMenu = ({ showNav }) => {
    if (showNav) {
        return (
            <div className={showNav ? "navmenu navmenu--open" : "navmenu"}>
                <div className="navmenu__inner">
                    <nav className="navmenu__list">
                        <div className="navmenu__item">Browse</div>
                        <div className="navmenu__item">Discover</div>
                        <div className="navmenu__item">Shop</div>
                        <div className="navmenu__item">About</div>
                        <div className="navmenu__item">More</div>
                    </nav>
                </div>
            </div>
        );
    }

    return null;
};

export default NavMenu;
