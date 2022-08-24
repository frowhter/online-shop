import React from 'react';
import classes from "./main_page_components.module.css";

const Mainbanner = ({children, ...props}) => {
    return (
        <div {...props} className={classes.banner}>
            {children}
        </div>
    );
};

export default Mainbanner;