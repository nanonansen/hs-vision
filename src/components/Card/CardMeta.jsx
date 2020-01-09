import Vertical from "../Vertical";
import React, { useState } from "react";
import Icon from "../Icon";

const CardMeta = props => {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { title, category, quote } = props;

    return (
        <div className="card__inner">
            <h2
                className={
                    quote ? "card__title card__title--quote" : "card__title"
                }
            >
                <span className="highlight">{title}</span>
            </h2>
            <div className="card__footer">
                <Vertical>({category})</Vertical>
                <div className="card__actions">
                    <span
                        className="card__action card__action--like"
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        {isLiked ? (
                            <Icon name={"like-filled"} />
                        ) : (
                            <Icon name={"like"} />
                        )}
                    </span>
                    <span
                        className="card__action card__action--like"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                        {isBookmarked ? (
                            <Icon name={"bookmark-filled"} />
                        ) : (
                            <Icon name={"bookmark"} />
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardMeta;
