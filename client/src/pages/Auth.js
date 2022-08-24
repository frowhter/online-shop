import React, {useContext, useState} from 'react';

import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                let response = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }


    }
    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height: window.innerHeight-54,
            zIndex: 20,
        }}>
            <div style={{
                width: 600,
                border: ' 1px solid #FCBA6C',
                borderRadius: 40, padding: 50,
            }}>
                <h2 style={{margin: "auto", width:"fit-content"}}>{isLogin ?'Авторизация': 'Регистрация'}</h2>
                <form style={{display: "flex", flexDirection: "column"}}>
                    {isLogin ?
                        <div>
                            <MyInput
                                placeholder="Введите ваш email..."
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                            />
                            <MyInput
                                placeholder="Введите ваш пароль..."
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                                type="password"
                            />

                            <MyInput
                                placeholder="Введите ваше имя..."
                                value={name}
                                onChange={e=> setName(e.target.value)}
                            />
                        </div>

                    :    <div>
                            <MyInput
                                placeholder="Введите ваш email..."
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                            />
                            <MyInput
                                placeholder="Введите ваш пароль..."
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                    }
                    <div style={{display: "flex", justifyContent:"space-between", marginTop: 20,}}>
                        {isLogin ?


                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <MyButton style={{
                            marginLeft: 'auto'

                        }}
                                  onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </MyButton>
                    </div>
                </form>
            </div>

        </div>


    );
});

export default Auth;