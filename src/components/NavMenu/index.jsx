import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ showNav, handleNavItemClick }) => {
    if (showNav) {
        return (
            <div className={showNav ? "navmenu navmenu--open" : "navmenu"}>
                <div className="navmenu__inner">
                    <nav className="navmenu__list" onClick={handleNavItemClick}>
                        <NavLink exact to="/" className="navmenu__item">
                            Browse
                        </NavLink>
                        <NavLink to="/discover" className="navmenu__item">
                            Discover
                        </NavLink>

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
