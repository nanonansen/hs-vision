import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Vertical from "../Vertical";

const Card = ({ type, content }) => {
    switch (type) {
        case "image":
            return (
                <div className="card">
                    <figure className="card__image aspect-ratio-4-5">
                        <img src={content.imgUrl} alt="" className="image" />
                    </figure>
                    <div className="card__inner">
                        <h2 className="card__title">{content.title}</h2>
                        <div className="card__footer">
                            <Vertical>{content.tag}</Vertical>
                        </div>
                    </div>
                </div>
            );
        case "custom-shape":
            return (
                <div className="card">
                    <figure className="card__image aspect-ratio-4-5">
                        
                        <svg viewBox="0 0 300 300">
                            <defs>
                            <clipPath id="clip" clipPathUnits="objectBoundingBox"><path d={content.clipPath}></path></clipPath>
                            </defs>

                            <image
                                height="100%"
                                preserveAspectRatio="xMinYMin slice"
                                width="100%"
                                href={content.imgUrl}
                                clipPath="url(#clip)"
                            />
                        </svg>
                    </figure>
                    <div className="card__inner">
                        <h2 className="card__title">{content.title}</h2>
                        <div className="card__footer">
                            <Vertical>{content.tag}</Vertical>
                        </div>
                    </div>
                </div>
            );
        case "gallery":
            return (
                <div className="card card--gallery">
                    <div className="gallery-wrapper">
                        <AliceCarousel
                            mouseTrackingEnabled
                            buttonsDisabled
                            className="carousel"
                            //preventEventOnTouchMove={true}
                        >
                            {content.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.imgUrl}
                                    className="slide-image"
                                    alt=""
                                />
                            ))}
                        </AliceCarousel>
                    </div>
                    <div className="card__inner">
                        <h2 className="card__title">{content.title}</h2>
                        <div className="card__footer">
                            <Vertical>{content.tag}</Vertical>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default Card;
