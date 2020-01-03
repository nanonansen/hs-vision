import React from "react";

const Container = props => {
    return (
        <div className="container">
            <div className="grid">{props.children} </div>
        </div>
    );
};

export default Container;
