import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Prismic from "prismic-javascript";

import Client from "../../../prismicConfig";
import Image from "../../Image";

const Product = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let { productId } = useParams();

    // Fetch Data when component mounts
    useEffect(() => {
        NProgress.start();

        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("my.product.uid", productId)
            );
            if (response) {
                setData(response.results[0]);
                setIsLoading(false);
                NProgress.done();
            }
        };
        fetchData();
    }, [productId]);
    if (isLoading) {
        return <div className="preloader">(LOADING)</div>;
    }
    return (
        <div className="product">
            <div className="product__header">
                <h1 className="product__title">
                    {data.data.product_title[0].text}
                </h1>
                <p className="product__brand">{data.data.brand}</p>
            </div>
            <Image src={data.data.featured_image.url} crop={"&fit=clamp"} />
            <button className="button button--primary button--sticky">
                Buy at {data.data.brand}
            </button>
        </div>
    );
};

export default Product;
