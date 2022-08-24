import React from 'react';

const MySelect = ({children, ...props}) => {
    return (
        <select {...props}>
            {children}
        </select>
    );
};

export default MySelect;