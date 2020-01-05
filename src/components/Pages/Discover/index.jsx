import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prismic from "prismic-javascript";
import NProgress from "nprogress";
import LazyLoad from "react-lazyload";

import Container from "../../Container";
import TagCarousel from "../../TagCarousel";
import Image from "../../Image";

import Client from "../../../prismicConfig";

const Discover = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        NProgress.start();
        const fetchData = async () => {
            const response = await Client.query(
                [
                    Prismic.Predicates.any("document.type", [
                        "article",
                        "product"
                    ]),
                    Prismic.Predicates.not("my.article.thumbnail_type", "quote")
                ],
                { orderings: "[document.last_publication_date desc]" }
            );
            if (response) {
                console.log(response.results);

                setData(response.results);
                setIsLoading(false);
                NProgress.done();
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="preloader">(LOADING)</div>;
    } else {
        return (
            <main className="discover">
                <TagCarousel />
                <Container>
                    {data.map((item, index) => {
                        if (item.type === "product") {
                            return (
                                <div
                                    className="grid__item grid__item-col-2"
                                    key={index}
                                >
                                    <Link to={`/product/${item.uid}`}>
                                        <Image
                                            src={item.data.featured_image.url}
                                            crop={"&fit=clamp"}
                                        />
                                    </Link>
                                </div>
                            );
                        }
                        return (
                            <LazyLoad throttle={100} height={260} key={index}>
                                <div
                                    className="grid__item grid__item-col-2"
                                    key={index}
                                >
                                    <Link to={`/article/${item.uid}`}>
                                        <Image
                                            src={item.data.featured_image.url}
                                        />
                                    </Link>
                                </div>
                            </LazyLoad>
                        );
                    })}
                </Container>
            </main>
        );
    }
};

export default Discover;
