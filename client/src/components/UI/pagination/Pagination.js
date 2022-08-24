import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({children, ...props}) => {
    return (
        <div {...props} className={classes.page__wrapper}>
            {children}
        </div>
    );
};

export default Pagination;