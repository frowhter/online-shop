import React from 'react';
import classes from "./Pagination.module.css";

const PaginationItem = ({children,...props}) => {
    const {active} = props
    return (
        <span {...props}  className={active ?  classes.page__current : classes.page}>
            {children}
        </span>
    );
};

export default PaginationItem;