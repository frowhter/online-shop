import React, {useContext, useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/Navbar/NavBar";
import FooterBar from "./components/UI/FooterBar/FooterBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import Loader from "./components/UI/Loader/Loader";
import Container from "./components/UI/container/Container";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=> setLoading(false))
    },[])

    if(loading) {
        return (
            <Container style={{height: '100vh', width: '100vw'}}>
                    <Loader style={{margin: 'auto'}}/>
            </Container>

        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <FooterBar/>
        </BrowserRouter>
    );
});

export default App;