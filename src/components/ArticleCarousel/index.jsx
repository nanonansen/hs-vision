import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Prismic from "prismic-javascript";
import Client from "../../prismicConfig";

import Image from "../Image";

const ArticleCarousel = ({ id, uid }) => {
    const [data, setData] = useState({ title: "", results: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ids = [];
        let title = "";
        const fetchIds = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("document.id", id)
            );

            if (response) {
                console.log(
                    "fetchIds",
                    response.results[0].data.carousel_title[0].text
                );

                response.results[0].data.articles.map(el =>
                    ids.push(el.article.id)
                );

                title = response.results[0].data.carousel_title[0].text;
                fetchData(ids, title);
            }
        };
        const fetchData = async (ids, title) => {
            const res = await Client.getByIDs(ids);
            if (res) {
                console.log("ArticleCarousel Response", res.results);
                setData({ title: title, results: res.results });
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
                        {data && data.title}
                    </h2>
                </div>
                <div className="article-carousel__items">
                    {data.results.map((article, index) => {
                        return (
                            <div className="article-carousel__item" key={index}>
                                <Link to={`/${article.type}/${article.uid}`}>
                                    <div className="article-carousel__inner">
                                        <Image
                                            src={
                                                article.data.featured_image.url
                                            }
                                            crop={"crop"}
                                        />
                                    </div>
                                </Link>
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
