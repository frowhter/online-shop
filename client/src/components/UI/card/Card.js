import React from 'react';
import classes from "../card/Card.module.css";

const Card = ({children, ...props}) => {
    return (
        <div {...props} className={classes.Card}>
            {children}
        </div>
    );
};

export default Card;