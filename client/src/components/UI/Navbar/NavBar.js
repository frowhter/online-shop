import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import logo from './img/LOGO.svg'
import vk from './img/vk.svg'
import tg from './img/tg.svg'
import youTube from './img/youTube.svg'
import location from './img/location.svg'
import phone from './img/phone.svg'
import userIcon from './img/user.svg'
import {Context} from "../../../index";
import MyButton from "../button/MyButton";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <div style={{display: 'grid', zIndex: 30}}>
            <div style={{display: "flex",
                background: '#F6E071',
                alignItems: "center",
                height: 50,
                width:'100vw',
                maxWidth: '100%',
                padding: '0 50px',
                zIndex: 30,
            }}>
                <div style={{display:"flex", alignItems: "center"}}><img src={location} alt={'расположение'}/><label>Москва</label></div>
                <NavLink style={{marginLeft: "auto"}} to={SHOP_ROUTE}><img src={vk} alt={'ВК'}/></NavLink>
                <NavLink style={{marginLeft:'30px'}} to={SHOP_ROUTE}><img src={tg} alt={'Телеграм'}/></NavLink>
                <NavLink style={{marginLeft:'30px'}} to={SHOP_ROUTE}><img src={youTube} alt={'YouTube канал'}/></NavLink>
                <NavLink style={{display:"flex", alignItems: "center",marginLeft: "auto", marginRight: "50px"}} to={SHOP_ROUTE}><img src={phone} alt={'телефон'}/> <label>+7(964)123-45-67</label></NavLink>
                {user.isAuth ?
                    <div style={{display: "flex", gap:'20px'}}>
                        <MyButton onClick={()=>history(ADMIN_ROUTE)}>Админ панель</MyButton>
                        <MyButton onClick={()=>logOut()}><img src={userIcon} alt={'профиль'}/>Выйти</MyButton>
                    </div>

                :
                    <div style={{display: "flex", gap:'20px'}}>
                        <MyButton onClick={() => history(LOGIN_ROUTE)}><img src={userIcon} alt={'профиль'}/>Авторизация</MyButton>
                    </div>

                }

            </div>
            <div style={{display: "flex",
                position: "sticky",
                alignItems: "center",
                height: 50,
                width:'100vw',
                maxWidth: '100%',
                padding: '0 50px',
                zIndex: 30,
            }}>
                <NavLink to={SHOP_ROUTE}><img style={{margin: 'auto', maxWidth: '100%'}} src={logo} alt={'Детская планета'}/></NavLink>
                <div style={{display: "flex", width: '100%', justifyContent: "center"}}>
                    <NavLink style={{marginLeft: '5%', textDecoration: "none"}} to={CATALOG_ROUTE}>Каталог</NavLink>
                    <NavLink style={{marginLeft: '2%', textDecoration: "none"}} to={SHOP_ROUTE}>Услуги</NavLink>
                    <NavLink style={{marginLeft: '2%', textDecoration: "none"}} to={SHOP_ROUTE}>Акции</NavLink>
                    <NavLink style={{marginLeft: '2%', textDecoration: "none"}} to={SHOP_ROUTE}>О Детской планете</NavLink>
                    <NavLink style={{marginLeft: '2%', textDecoration: "none"}} to={SHOP_ROUTE}>Мультики</NavLink>
                </div>
            </div>
        </div>
    );
});

export default NavBar;