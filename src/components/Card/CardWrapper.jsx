import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CardWrapper = ({ children, type }) => {
    return (
        <TransitionGroup component={null}>
            <CSSTransition appear classNames="fade" timeout={500}>
                <div className={"card card--" + type}>{children}</div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default CardWrapper;
