import React, {useContext, useMemo} from 'react';
import {useParams} from "react-router-dom";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import Container from "../components/UI/container/Container";
import {useEffect} from "react";
import {fetchProducts, fetchTypes} from "../http/productAPI";
import {observer} from "mobx-react-lite";
import Pages from "../components/Pages";

const ProductPage = observer(() => {
    const {product} = useContext(Context)
    const {typeId} = useParams()
    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    },[])

    useEffect(() => {
        fetchProducts( +typeId, product.page, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page])

    const label = useMemo(()=>{
        return product.types.map(i => {if (i.id ===+typeId) return i.name})
    }, [product.types])



    return (
        <Container>
            <div style={{height: '100%'}}>
                <h2 style={{textAlign:"center"}}>{product.products.length!==0 ? label: label+ ' Скоро появится'}</h2>
                <ProductList typeId={typeId}/>
                <Pages/>
            </div>
        </Container>
    );
});

export default ProductPage;