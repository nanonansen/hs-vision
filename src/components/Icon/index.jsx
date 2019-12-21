import React from "react";

const Icon = ({ name }) => {
    switch (name) {
        case "menu":
            return (
                <svg width="24" height="19" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M24 18v1H0v-1h24zm0-9v1H0V9h24zm0-9v1H0V0h24z"
                            fill="#000"
                        />
                    </g>
                </svg>
            );
        case "close":
            return (
                <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g stroke="#000">
                            <path d="M18.938.063L1.063 17.938M1.063.063l17.875 17.875" />
                        </g>
                    </g>
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;
