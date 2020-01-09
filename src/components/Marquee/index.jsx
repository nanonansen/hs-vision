import React from "react";
import Ticker from "react-ticker";
import { Link } from "react-router-dom";

const Marquee = ({ content }) => {
    return (
        <div
            className="marquee-container"
            style={{ backgroundColor: `${content.marquee_background_color}` }}
        >
            <Ticker
                mode="smooth"
                direction={content.direction}
                speed={4}
                style={{ background: "blue" }}
            >
                {() => (
                    <p>
                        {!content.marquee_link.link_type === "Any" ? (
                            <>
                                <Link
                                    to={`/article/${content.marquee_link.uid}`}
                                >
                                    <span>{content.marquee_text_1}</span>
                                    <span>{content.marquee_text_2}</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <span>{content.marquee_text_1}</span>
                                <span>{content.marquee_text_2}</span>
                            </>
                        )}
                    </p>
                )}
            </Ticker>
        </div>
    );
};

export default Marquee;
