import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Card = ({ type, content }) => {
    switch (type) {
        case "image":
            return (
                <div className="card">
                    {/* <span className="tag">{content.tag}</span> */}
                    <figure className="card__image aspect-ratio-4-5">
                        <img src={content.imgUrl} alt="" className="image" />
                    </figure>
                    <div className="card__inner">
                        <h2 className="card__title">{content.title}</h2>
                        <div className="card__footer">
                            <span className="vertical">({content.tag})</span>
                            {/* <span className="share">Read More</span> */}
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
                            <span className="vertical">({content.tag})</span>
                            {/* <span className="share">Read More</span> */}
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default Card;
