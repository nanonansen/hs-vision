import React from "react";
import Ticker from "react-ticker";

const Marquee = ({ content }) => {
    return (
        <Ticker className="marquee" offset={20}>
            {() => (
                <>
                    <p>{content.text}</p>
                </>
            )}
        </Ticker>
    );
};

export default Marquee;
