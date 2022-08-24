import React, {useContext, useEffect} from 'react';
import TypeBar from "../components/TypeBar";
import Container from "../components/UI/container/Container";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts, fetchTypes} from "../http/productAPI";


const Catalog = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    },[])
    return (
        <Container>
            <div style={{height: '100%'}}>
                <h2 style={{textAlign:"center"}}>Каталог</h2>
                <TypeBar/>
            </div>
        </Container>
    );
});

export default Catalog;