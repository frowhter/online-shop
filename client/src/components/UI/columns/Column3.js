import React from 'react';
import classes from "../columns/Columns.module.css";

const Column3 = ({children, ...props}) => {
    return (
        <div {...props} className={classes.Column3}>
            {children}
        </div>
    );
};

export default Column3;