import React from "react";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

import Image from "../Image";
import { Link } from "react-router-dom";
import CardWrapper from "./CardWrapper";
import CardMeta from "./CardMeta";
import ArticleCarousel from "../ArticleCarousel";

const Card = ({ type, content, uid, id }) => {
    console.log(content.thumbnail_type);

    switch (type) {
        case "article":
            return (
                <div className="grid__item grid__item--article">
                    <CardWrapper type={content.thumbnail_type}>
                        <Link to={`/article/${uid}`}>
                            {Object.keys(content.featured_image).length !==
                            0 ? (
                                <>
                                    <Image
                                        src={content.featured_image.url}
                                        alt={content.featured_image.alt}
                                    />
                                    <CardMeta
                                        title={content.article_title[0].text}
                                        category={content.category}
                                    />
                                </>
                            ) : (
                                <CardMeta
                                    title={content.article_title[0].text}
                                    category={content.category}
                                    quote
                                />
                            )}
                        </Link>
                    </CardWrapper>
                </div>
            );

        case "article_carousel":
            return (
                <div className="grid__item grid__item--article-carousel">
                    <CardWrapper type={type}>
                        <ArticleCarousel id={id} />
                    </CardWrapper>
                </div>
            );

        default:
            return null;
    }
};

export default Card;

//     switch (type) {
//         case "article":
//             return (
//                 <TransitionGroup key={1}>
//                     <CSSTransition appear classNames="fade" timeout={500}>
//                         <div className={"card card--" + cardType}>
//                             <Link to={`/article/${id}`}>
//                                 <figure className="card__image aspect-ratio-4-5">
//                                     <img
//                                         src={
//                                             content.featured_image.url +
//                                             mobileImgParams
//                                         }
//                                         alt={content.featured_image.alt}
//                                         className="image"
//                                     />
//                                 </figure>
//                                 <div className="card__inner">
//                                     <h2 className="card__title">
//                                         {content.article_title[0].text}
//                                     </h2>
//                                     <div className="card__footer">
//                                         <Vertical>{content.category}</Vertical>
//                                     </div>
//                                 </div>
//                                 {/* {content.body1.map((slice, index) => {
//                                     if (slice.slice_type === "quote") {
//                                         return (
//                                             <h2
//                                                 className="card__quote"
//                                                 key={index}
//                                             >
//                                                 {
//                                                     slice.primary
//                                                         .featured_quote[0].text
//                                                 }
//                                             </h2>
//                                         );
//                                     } else if (slice.slice_type === "image") {
//                                         return (
//                                             <figure
//                                                 className="card__image aspect-ratio-4-5"
//                                                 key={index}
//                                             >
//                                                 <img
//                                                     src={
//                                                         slice.primary
//                                                             .featured_image
//                                                             .url +
//                                                         mobileImgParams
//                                                     }
//                                                     alt={
//                                                         slice.primary
//                                                             .featured_image.alt
//                                                     }
//                                                     className="image"
//                                                 />
//                                             </figure>
//                                         );
//                                     } else {
//                                         return null;
//                                     } */}
//                                 })}
//                             </Link>
//                         </div>
//                     </CSSTransition>
//                 </TransitionGroup>
//             );
//         // case "custom-shape":
//         //     return (
//         //         <div className="card">
//         //             <figure className="card__image aspect-ratio-4-5">
//         //                 <svg viewBox="0 0 300 300">
//         //                     <defs>
//         //                         <clipPath
//         //                             id="clip"
//         //                             clipPathUnits="objectBoundingBox"
//         //                         >
//         //                             <path d={content.clipPath}></path>
//         //                         </clipPath>
//         //                     </defs>

//         //                     <image
//         //                         height="100%"
//         //                         preserveAspectRatio="xMinYMin slice"
//         //                         width="100%"
//         //                         href={content.imgUrl}
//         //                         clipPath="url(#clip)"
//         //                     />
//         //                 </svg>
//         //             </figure>
//         //             <div className="card__inner">
//         //                 <h2 className="card__title">{content.title}</h2>
//         //                 <div className="card__footer">
//         //                     <Vertical>{content.tag}</Vertical>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     );
//         // case "card-gallery":
//         //     return (
//         //         <TransitionGroup key={2}>
//         //             <CSSTransition appear classNames="fade" timeout={500}>
//         //                 <div className="card card--gallery">
//         //                     <div className="gallery-wrapper">
//         //                         <AliceCarousel
//         //                             mouseTrackingEnabled
//         //                             buttonsDisabled
//         //                             className="carousel"
//         //                             //preventEventOnTouchMove={true}
//         //                         >
//         //                             {content.gallery.map((image, index) => (
//         //                                 <img
//         //                                     key={index}
//         //                                     src={
//         //                                         image.gallery_item.url +
//         //                                         mobileImgParams
//         //                                     }
//         //                                     className="slide-image"
//         //                                     alt=""
//         //                                 />
//         //                             ))}
//         //                         </AliceCarousel>
//         //                     </div>
//         //                     <div className="card__inner">
//         //                         <h2 className="card__title">
//         //                             {content.title[0].text}
//         //                         </h2>
//         //                         <div className="card__footer">
//         //                             <Vertical>{content.category}</Vertical>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </CSSTransition>
//         //         </TransitionGroup>
//         //     );
//         default:
//             return null;
//     }
// };

// export default Card;
