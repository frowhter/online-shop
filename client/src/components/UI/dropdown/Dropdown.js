import React from 'react';
import {useState} from "react";
import classes from './Dropdown.module.css';

const Dropdown = ({children, defaultLabel}) => {
    const [drop, setDrop] =useState('none')
    return (
        <div
            className={classes.drpDwn}
            onClick={()=> {
                drop === 'none'
                    ?
                    setDrop('block')
                    :
                    setDrop('none')
            }}
        >
            <div style={{background:'#FCBA6C', padding: '10px'}}>{defaultLabel}</div>
            <div style={{display: drop}}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;