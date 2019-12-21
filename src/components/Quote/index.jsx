import React from "react";
import Vertical from "../Vertical";

const Quote = ({ content }) => {
    return (
        <div className="quote">
            <div className="quote__content">
                <h2 className="quote__text">
                    <span className="highlight">{content.title}</span>
                </h2>
                <Vertical>{content.tag}</Vertical>
            </div>
        </div>
    );
};

export default Quote;
