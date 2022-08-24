import React, {useContext, useEffect} from 'react';
import Container from "../components/UI/container/Container";
import Mainbanner from "../components/main_page_components/Mainbanner";
import MainBanner from "./img/MainBanner.png"
import New from "./img/new.png"
import Collections from "./img/collections.png"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes} from "../http/productAPI";
import TypeBar from "../components/TypeBar";
import Sections from "../components/main_page_components/Sections";


const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    },[])
    return (
        <Container>
            <div style={{height: '100%'}}>
                <Mainbanner>
                    <div>
                        <img style={{maxWidth: '100%'}} src={MainBanner} alt="Преимущества"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: '20%'}}>
                        <div>
                            <img style={{maxWidth: '100%'}} src={New} alt="Новинки"/>
                            <p style={{textAlign: "center"}}>Новинки</p>
                        </div>
                        <div>
                            <img style={{maxWidth: '100%'}} src={Collections} alt="Наша коллекция"/>
                            <p style={{textAlign: "center"}}>Наша коллекция</p>
                        </div>
                    </div>

                </Mainbanner>

                <Sections/>

            </div>
        </Container>
    );
});

export default Shop;