import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Prismic from "prismic-javascript";
import { useParams } from "react-router-dom";

import { RichText } from "prismic-reactjs";
import Client, { linkResolver } from "../../../prismicConfig";

import Vertical from "../../Vertical";

const mobileImgParams = "&fit=crop&w=375&h=470&dpr=2";

NProgress.configure({ showSpinner: false });

const Article = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { articleId } = useParams();

    useEffect(() => {
        NProgress.start();
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at("my.article.uid", articleId)
            );
            if (response) {
                console.log(response.results);

                setData(response.results[0]);

                setIsLoading(false);
                NProgress.done();
            }
        };
        fetchData();
    }, [articleId]);
    return (
        <div>
            {isLoading ? (
                <div className="preloader">(LOADING)</div>
            ) : (
                <TransitionGroup key={1}>
                    <CSSTransition appear classNames="fade" timeout={500}>
                        <article className="article">
                            <div className="article__header">
                                <h1 className="article__title">
                                    {data.data.article_title[0].text}
                                </h1>
                                <Vertical>{data.data.category}</Vertical>
                            </div>
                            <div className="article__content">
                                {data.data.body.map((slice, index) => {
                                    if (slice.slice_type === "paragraph") {
                                        return (
                                            <RichText
                                                render={slice.primary.paragraph}
                                                linkResolver={linkResolver}
                                                key={index}
                                            />
                                        );
                                    } else if (slice.slice_type === "heading") {
                                        return (
                                            <RichText
                                                render={slice.primary.heading}
                                                linkResolver={linkResolver}
                                                key={index}
                                            />
                                        );
                                    } else if (slice.slice_type === "image") {
                                        return (
                                            <figure
                                                className="article__image"
                                                key={index}
                                            >
                                                <img
                                                    src={
                                                        slice.primary.image
                                                            .url +
                                                        mobileImgParams
                                                    }
                                                    alt={
                                                        slice.primary.image.alt
                                                    }
                                                    width={375}
                                                    height={470}
                                                />
                                            </figure>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </article>
                    </CSSTransition>
                </TransitionGroup>
            )}
        </div>
    );
};

export default Article;
