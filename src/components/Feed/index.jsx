import React, { useState, useEffect } from "react";

import LazyLoad from "react-lazyload";
import Prismic from "prismic-javascript";
import NProgress from "nprogress";

import Container from "../Container";
import Card from "../Card";
import Marquee from "../Marquee";

import Client from "../../prismicConfig";

const Feed = () => {
    const [data, setData] = useState([]);
    const [dataFeatured, setDataFeatured] = useState([]);
    const [dataMarquee, setDataMarquee] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        NProgress.start();
        const fetchData = async () => {
            const response = await Client.query(
                [
                    Prismic.Predicates.any("document.type", [
                        "article",
                        "article_carousel"
                    ]),
                    Prismic.Predicates.not("my.article.featured", "yes")
                ],
                { orderings: "[document.last_publication_date desc]" }
            );
            if (response) {
                setData(response.results);
                setIsLoading(false);
                NProgress.done();
            }
        };
        const fetchFeatured = async () => {
            const response = await Client.query(
                [Prismic.Predicates.at("my.article.featured", "yes")],
                { orderings: "[document.last_publication_date desc]" }
            );
            if (response) {
                //console.log("response", response.results);

                setDataFeatured(response.results);
                // setIsLoading(false);
                // NProgress.done();
            }
        };
        const fetchMarqueeData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("document.type", "marquee")
            );
            if (response) {
                console.log("marquee response", response.results[0]);
                setDataMarquee(response.results);
            }
        };
        fetchFeatured();
        fetchData();

        fetchMarqueeData();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="preloader">(LOADING)</div>
            ) : (
                <>
                    <main className="feed">
                        {dataMarquee.map((marquee, index) => (
                            <Marquee content={marquee.data} key={index} />
                        ))}
                        <div className="featured">
                            <Container>
                                {dataFeatured.map((item, index) => {
                                    return (
                                        <LazyLoad
                                            throttle={100}
                                            height={560}
                                            key={index}
                                        >
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
                        </div>
                        {/* <Marquee content={marqueeData} /> */}
                        <Container>
                            {data.map((item, index) => {
                                return (
                                    <LazyLoad
                                        throttle={100}
                                        height={560}
                                        key={index}
                                    >
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
                    </main>
                </>
            )}
        </>
    );
};

export default Feed;
