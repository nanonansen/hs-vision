import React, { useState, useEffect } from "react";

import LazyLoad from "react-lazyload";
import Prismic from "prismic-javascript";
import NProgress from "nprogress";

import Container from "../Container";
import Card from "../Card";

import Client from "../../prismicConfig";

const Feed = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        NProgress.start();
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.any("document.type", [
                    "article",

                    "article_carousel"
                ]),
                { orderings: "[document.last_publication_date desc]" }
            );
            if (response) {
                setData(response.results);
                setIsLoading(false);
                NProgress.done();
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="preloader">(LOADING)</div>
            ) : (
                <Container>
                    {data.map((item, index) => {
                        return (
                            <LazyLoad throttle={100} height={560} key={index}>
                                <Card
                                    type={item.type}
                                    content={item.data}
                                    uid={item.uid}
                                    id={item.id}
                                />
                            </LazyLoad>
                        );
                    })}
                </Container>
            )}
        </>
    );
};

export default Feed;
