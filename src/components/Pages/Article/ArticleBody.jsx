import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../../prismicConfig";
import Vertical from "../../Vertical";
import Image from "../../Image";
import RelatedArticles from "../../RelatedArticles";

const ArticleBody = ({ content, loadNextPage }) => {
    //console.log("ArticleBody Content", content);

    return (
        <TransitionGroup>
            <CSSTransition appear classNames="fade" timeout={500}>
                <article className="article">
                    <div className="article__header">
                        <h1 className="article__title">
                            {content.data.article_title[0].text}
                        </h1>
                        <Vertical>{content.data.category}</Vertical>
                    </div>
                    <div className="article__content">
                        {content.data.body.map((slice, index) => {
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
                            } else if (slice.slice_type === "quote") {
                                return (
                                    <RichText
                                        render={slice.primary.quote}
                                        linkResolver={linkResolver}
                                        Component={"blockquote"}
                                        key={index}
                                    />
                                );
                            } else if (slice.slice_type === "image") {
                                return (
                                    <Image
                                        src={slice.primary.image.url}
                                        alt={slice.primary.image.alt}
                                        key={index}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <RelatedArticles
                        category={content.data.category}
                        currentArticleId={content.id}
                    />
                    {loadNextPage && <div className="nextPage-preloader"></div>}
                </article>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default ArticleBody;
