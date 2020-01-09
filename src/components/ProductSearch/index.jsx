import React from "react";
import Button from "../Button";

const ProductSearch = ({ handleSearchActivation }) => {
    return (
        <div className="product-search">
            <Button
                className="button button--secondary"
                onClick={handleSearchActivation}
            >
                Close
            </Button>
            <div className="product-search__input">
                <input
                    className="input input--search"
                    type="text"
                    name=""
                    id=""
                    placeholder="Search the site"
                />
            </div>
            <div className="product-search__recommendations">
                <h2>Popular</h2>
                <span>Air Jordan 1</span>
                <span>Black Yeezy 700 V3</span>
                <span>Frank Ocean Prada</span>
                <span>1017 ALYX 9SM x Bang & Olufsen</span>
            </div>
        </div>
    );
};

export default ProductSearch;
