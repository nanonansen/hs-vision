import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

import Client from "../../prismicConfig";

import Image from "../Image";

const ProductCarousel = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("document.type", "product")
            );
            if (response) {
                console.log("ProductCarousel", response.results);

                setData(response.results);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="product-carousel">
            <div className="product-carousel__header">
                <h2 className="product-carousel__title">
                    The Highsnobiety <br /> Holiday Gift Guide 2019
                </h2>
            </div>
            <div className="product-carousel__items">
                {data.map((product, index) => {
                    console.log("product", product);

                    return (
                        <div className="product-carousel__item" key={index}>
                            <div className="product-carousel__inner">
                                <Image
                                    src={product.data.featured_image.url}
                                    crop={"crop"}
                                />
                                {/* <h3 className="product-carousel__title">
                                {product.data.product_title[0].text}
                            </h3> */}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="product-carousel__footer">Browse all Guides</div>
        </div>
    );
};

export default ProductCarousel;
