import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CardWrapper = props => {
    return (
        <TransitionGroup>
            <CSSTransition appear classNames="fade" timeout={500}>
                <div className="card card--article">{props.children}</div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default CardWrapper;
