import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import Client from "../../prismicConfig";

import Image from "../Image";

const ArticleCarousel = ({ id }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ids = [];
        const fetchIds = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("document.id", id)
            );

            if (response) {
                response.results[0].data.articles.map(el =>
                    ids.push(el.article.id)
                );
                console.log(response.results[0].data.articles);

                if (ids.length) {
                    console.log("ids", ids);
                }
                fetchData(ids);
            }
        };
        const fetchData = async ids => {
            const res = await Client.getByIDs(ids);
            if (res) {
                console.log(res.results);
                setData(res.results);
                setIsLoading(false);
            }
        };

        fetchIds();
    }, [id]);
    if (!isLoading) {
        return (
            <div className="article-carousel">
                <div className="article-carousel__header">
                    <h2 className="article-carousel__title">
                        The Highsnobiety <br /> Holiday Gift Guide 2019
                    </h2>
                </div>
                <div className="article-carousel__items">
                    {data.map((article, index) => {
                        console.log("article", article);

                        return (
                            <div className="article-carousel__item" key={index}>
                                <div className="article-carousel__inner">
                                    <Image
                                        src={article.data.featured_image.url}
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
                <div className="article-carousel__footer">
                    Browse all Guides
                </div>
            </div>
        );
    }
    return null;
};

export default ArticleCarousel;
