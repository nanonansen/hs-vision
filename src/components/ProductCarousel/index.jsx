import React from "react";

const ProductCarousel = ({ content }) => {
    console.log("content", content);

    return (
        <div className="product-carousel">
            <h2>Product Calendar</h2>
            <div className="product-carousel__inner">
                {content.products.map((product, index) => (
                    <div className="product-carousel__item" key={index}>
                        <img src={product.imgUrl} alt="" />
                        <div className="item__date">$199.00</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
