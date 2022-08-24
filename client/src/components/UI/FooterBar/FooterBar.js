import React, {useContext} from 'react';
import logoFooter from './img/logoFooter.svg'
import {CATALOG_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import classes from "../FooterBar/FooterBar.module.css";
import {Context} from "../../../index";
const FooterBar = () => {
    const {product} = useContext(Context)
    return (
        <div className={classes.FooterBar}>
            <div>
                <NavLink to={SHOP_ROUTE}><img style={{margin: 'auto', maxWidth: '100%'}} src={logoFooter} alt={'Детская планета'}/></NavLink>
            </div>
            <div style={{display: "grid"}}>
                <NavLink style={{textDecoration: "none", marginBottom: '20px'}} to={CATALOG_ROUTE}>О нас</NavLink>
            </div>
            <div style={{display: "grid"}}>
                <NavLink style={{textDecoration: "none", marginBottom: '20px'}} to={CATALOG_ROUTE}>Услуги</NavLink>
            </div>
            <div style={{display: "grid"}}>
                <NavLink style={{textDecoration: "none", marginBottom: '20px'}} to={CATALOG_ROUTE}>Каталог</NavLink>
                {product.types.map(i =>
                    <NavLink style={{textDecoration: "none", marginBottom: '5px'}} to={CATALOG_ROUTE + '/'+ i.id}>{i.name}</NavLink>
                )}
            </div>
            <div style={{display: "grid"}}>
                <NavLink style={{textDecoration: "none", marginBottom: '20px'}} to={CATALOG_ROUTE}>Акции</NavLink>
            </div>
        </div>
    );
};

export default FooterBar;