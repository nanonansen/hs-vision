import React from "react";
import Vertical from "../Vertical";

const CardMeta = ({ title, category, quote }) => {
    return (
        <div className="card__inner">
            <h2
                className={
                    quote ? "card__title card__title--quote" : "card__title"
                }
            >
                {title}
            </h2>
            <div className="card__footer">
                <Vertical>{category}</Vertical>
            </div>
        </div>
    );
};

export default CardMeta;
