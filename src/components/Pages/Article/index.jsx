import React, { useEffect, useState } from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Prismic from "prismic-javascript";
import { useParams } from "react-router-dom";

import Client from "../../../prismicConfig";

import ArticleBody from "./ArticleBody";

// const mobileImgParams = "&fit=crop&w=375&h=470&dpr=2";

NProgress.configure({ showSpinner: false });

const Article = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingNewPage, setIsLoadingNewPage] = useState({
        loading: false
    });
    const [isFetching, setIsFetching] = useState(false);
    const [lastFetchedArticle, setLastFetchedArticle] = useState(null);
    const [pageIndex, setPageIndex] = useState(0);
    let { articleId } = useParams();

    // Fetch Data when component mounts
    useEffect(() => {
        NProgress.start();
        setIsLoadingNewPage({ loading: false });
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("my.article.uid", articleId)
            );
            if (response) {
                setData([response.results[0]]);
                setLastFetchedArticle(response.results[0].id);

                setIsLoading(false);
                NProgress.done();
            }
        };
        fetchData();
    }, [articleId]);

    // Add Eventlistener to listen for Scroll Events
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fetch new Article
    useEffect(() => {
        if (!isFetching || lastFetchedArticle === null) return;

        fetchNextArticle(pageIndex); // eslint-disable-next-line
    }, [isFetching]);

    const fetchNextArticle = async index => {
        console.log("fetchNextArticle");

        const response = await Client.query(
            [
                Prismic.Predicates.at("document.type", "article"),
                Prismic.Predicates.not("document.id", lastFetchedArticle)
            ],

            { pageSize: 1, page: index + 1 }
        );
        if (response) {
            let newData = response.results[0];

            setData(prevState => [...prevState, { ...newData }]);
            setPageIndex(prevState => prevState + 1);
            setLastFetchedArticle(response.results[0].id);
            setIsFetching(false);
            setIsLoadingNewPage({ loading: false });
        }
    };

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        setIsFetching(true);

        setIsLoadingNewPage({ loading: true });
    }

    return (
        <div>
            {isLoading ? (
                <div className="preloader">(LOADING)</div>
            ) : (
                data &&
                data.map((article, index) => {
                    return (
                        <ArticleBody
                            content={article}
                            key={index}
                            loadNextPage={isLoadingNewPage.loading}
                        />
                    );
                })
            )}
        </div>
    );
};

export default Article;
