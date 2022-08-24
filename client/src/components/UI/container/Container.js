import React from 'react';
import classes from "../container/Container.module.css";

const Container = ({children, ...props}) => {
    return (
        <div {...props} className={classes.Container}>
            {children}
        </div>
    );
};

export default Container;