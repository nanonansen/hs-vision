import React, { useEffect, useState } from "react";
import Prismic from "prismic-javascript";
import { Link } from "react-router-dom";

import Client from "../../prismicConfig";
import Image from "../Image";

const RelatedArticles = ({ category, currentArticleId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!currentArticleId) return;

        const fetchData = async () => {
            const response = await Client.query(
                [
                    Prismic.Predicates.at("document.type", "article"),
                    Prismic.Predicates.similar(currentArticleId, 5),
                    Prismic.Predicates.not("document.id", currentArticleId)
                ],
                { pageSize: 2, page: 1 }
            );
            if (response) {
                setData(response.results);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="related-articles">
            <div className="related-articles__header">Related Articles</div>
            <div className="related-articles__items">
                {data &&
                    data.map(article => {
                        return (
                            <div
                                className="related-articles__item"
                                key={article.id}
                            >
                                <Link to={`/article/${article.uid}`}>
                                    <Image
                                        src={article.data.featured_image.url}
                                        alt={article.data.featured_image.alt}
                                    />
                                    <h3 className="title">
                                        {article.data.article_title[0].text}
                                    </h3>
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default RelatedArticles;
