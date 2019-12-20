import React from "react";

const Quote = ({ content }) => {
    return (
        <div className="quote">
            <div className="quote__content">
                <h2 className="quote__text">
                    <span className="highlight">{content.title}</span>
                </h2>
                {/* <span className="share">Read More</span> */}
            </div>
        </div>
    );
};

export default Quote;
