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
        case "plus":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14">
                    <defs>
                        <path id="a" d="M0 0h375v469H0z" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path fill="#FFF" d="M-344-296H31v421h-375z" />
                        <path d="M-344-22H31v57h-375z" />
                        <g stroke="#000">
                            <path d="M14 7H0M7 14V0" />
                        </g>
                    </g>
                </svg>
            );
        case "minus":
            return (
                <svg width="14" height="2" viewBox="0 0 14 2">
                    <defs>
                        <path id="a" d="M0 0h375v469H0z" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path fill="#FFF" d="M-344-87H31v421h-375z" />
                        <path d="M-344-28H31v57h-375z" />
                        <path d="M14 1H0" stroke="#000" />
                    </g>
                </svg>
            );
        case "like":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M14.328 2.672a4 4 0 00-5.657 0c-.28.28-.491.598-.671.929a3.948 3.948 0 00-.672-.93 4 4 0 00-5.657 5.657L8 14.5l6.328-6.172a3.997 3.997 0 000-5.656z"
                        stroke="#000"
                    />
                </svg>
            );
        case "like-filled":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M14.682 2.318a4.5 4.5 0 00-6.364 0c-.121.121-.214.259-.318.389-.104-.13-.197-.268-.318-.389a4.5 4.5 0 00-6.364 6.364L8 15l6.682-6.318a4.5 4.5 0 000-6.364z" />
                </svg>
            );
        case "bookmark":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                        d="M2.5 15.5l6-3 6 3v-13a2 2 0 00-2-2h-8a2 2 0 00-2 2z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#000"
                    />
                </svg>
            );
        case "bookmark-filled":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 0C2.9 0 2 .9 2 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H4z" />
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;
