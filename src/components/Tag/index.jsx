import React from "react";
const Tag = props => {
    return (
        <div onClick={props.onClick} className="tag">
            {props.children}
        </div>
    );
};

export default Tag;
