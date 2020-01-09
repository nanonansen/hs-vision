import React, { useState } from "react";
import Headroom from "react-headroom";

import Logo from "../Logo";
import NavMenu from "../NavMenu";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Header = ({ hideHeader }) => {
    const [showNav, setShowNav] = useState(false);
    let location = useLocation();
    console.log("location", location);

    const handleNavMenu = () => {
        setShowNav(!showNav);
        if (!showNav) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
    };
    const handleNavItemClick = () => {
        setShowNav(!showNav);
        document.body.classList.remove("noscroll");
    };

    return (
        <Headroom>
            <header className="site-header">
                <div className="site-header__inner">
                    <div className="site-header__menu">
                        <button onClick={handleNavMenu}>
                            <Icon name={showNav ? "close" : "menu"} />
                        </button>
                    </div>
                    <div className="branding">
                        <h1 className="logo">
                            <Link to={"/"}>
                                <Logo />
                            </Link>
                        </h1>
                    </div>
                    <div className="site-header__cart">
                        <button>
                            {/* <Icon name={"cart"} /> */}
                            Bag (0)
                        </button>
                    </div>
                </div>
                <NavMenu
                    showNav={showNav}
                    handleNavItemClick={handleNavItemClick}
                />
            </header>
        </Headroom>
    );
};

export default Header;
