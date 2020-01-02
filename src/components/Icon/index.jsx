import React from "react";

const Icon = ({ name }) => {
    switch (name) {
        case "menu":
            return (
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon--menu"
                >
                    <g stroke="#000" fill="none">
                        <path d="M1.5 12.5h22M1.5 5.5h22M1.5 19.5h22" />
                    </g>
                </svg>
            );
        case "close":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon icon--close"
                >
                    <g
                        strokeLinecap="square"
                        stroke="#000"
                        fill="none"
                        strokeMiterlimit="10"
                    >
                        <path d="M19.5 5.5l-14 14M19.5 19.5l-14-14" />
                    </g>
                </svg>
            );
        case "cart":
            return (
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon--cart"
                >
                    <g stroke="#000" fill="none">
                        <path d="M21.5 23.5h0-18v-17h18z" />
                        <path d="M8.5 9.5v-4c0-2.2 1.8-4 4-4h0c2.2 0 4 1.8 4 4v4" />
                    </g>
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;
