import React from "react";

// const mobileImgParams = "&fit=facearea&facepad=5&w=375&h=470&dpr=2";

const Image = ({ src, alt, crop }) => {
    //console.log("src", src);
    const urlParams = crop + "&w=375&h=470&dpr=2";
    if (src) {
        return (
            <figure className="image card__image aspect-ratio-4-5">
                <img src={src + urlParams} alt={alt || ""} className="image" />
            </figure>
        );
    } else {
        return null;
    }
};

export default Image;
