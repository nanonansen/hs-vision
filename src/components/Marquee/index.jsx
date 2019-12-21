import React from "react";
import Ticker from "react-ticker";

const Marquee = ({ content }) => {
    switch (content.content_type) {
        case "text":
            return (
                <Ticker
                    className="marquee"
                    mode="chain"
                    direction={content.direction}
                    speed={3}
                >
                    {() => (
                        <>
                            <p>{content.text}</p>
                        </>
                    )}
                </Ticker>
            );
        case "image":
            return (
                <div className="marquee--image">
                    <Ticker
                        className="marquee--image"
                        mode="chain"
                        speed={3}
                        offset={"100%"}
                        direction={content.direction}
                    >
                        {() => (
                            <>
                                <img
                                    width="100"
                                    height="70"
                                    src={content.imgUrl}
                                    alt=""
                                />
                            </>
                        )}
                    </Ticker>
                </div>
            );
        default:
            return null;
    }
};

export default Marquee;
