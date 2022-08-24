import React, {useEffect, useState} from 'react';
import Container from "../components/UI/container/Container";
import Column2 from "../components/UI/columns/Column2";
import Card from "../components/UI/card/Card";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../http/productAPI";

const ProductDetailed = () => {
    const [product,setProduct] = useState({info: []})
    const {id} = useParams()
    console.log(id)


    useEffect(()=>{
        fetchOneProduct(Number(id)).then(data => setProduct(data))
    }, [])
    return (
        <Container>
            <Column2>
                <Card style={{marginBottom: 50}}>
                    <img style={{margin: 'auto', maxWidth: '100%'}} src={process.env.REACT_APP_API_URL + product.img} alt={product.name}/>
                </Card>

                <div>
                    {product.info.map(item =>
                        <div key={item.id} style={{display: "flex", gap: 20}}>
                            <label>
                                {item.title}:
                            </label>
                            <label>
                                {item.description}
                            </label>
                        </div>


                    )}
                </div>
            </Column2>
        </Container>
    );
};

export default ProductDetailed;