import React, {useContext} from 'react';
import {Context} from "../index";
import ProductItem from "./ProductItem";
import {CATALOG_ROUTE} from "../utils/consts";
import {useNavigate, useParams} from "react-router-dom";
import Container from "./UI/container/Container";
import Column2 from "./UI/columns/Column2";
import {observer} from "mobx-react-lite";



const ProductList = observer(({typeId}) => {
    const {product} = useContext(Context)

    const r = useNavigate()
    return (
        <Container>

            <Column2>
                {product.products.filter(i => i.typeId ===+typeId).map(product =>
                    <div
                        key={product.id}
                        onClick={()=> r(CATALOG_ROUTE + '/' + typeId + '/' + product.id)}>
                        <ProductItem
                            product={product}
                        />
                    </div>

                )}
            </Column2>
        </Container>
    );
});

export default ProductList;