import React from 'react';
import classes from "../columns/Columns.module.css";

const Column2 = ({children, ...props}) => {
    return (
        <div {...props} className={classes.Column2}>
            {children}
        </div>
    );
};

export default Column2;