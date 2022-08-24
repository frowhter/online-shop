import React from 'react';
import Card from "./UI/card/Card";
import MyButton from "./UI/button/MyButton";

const ProductItem = ({product}) => {

    return (
        <Card  key={product.id}>

            <img style={{margin: 'auto', maxWidth: '100%'}} src={process.env.REACT_APP_API_URL + product.img} alt={product.name}/>

            <label style={{width: "fit-content"}}>{product.name}</label>

                <label style={{color: '#FCBA6C', fontWeight: "bold"}}>{product.price + ' Р'}</label>
                <MyButton style={{marginLeft: 'auto'}}>Перейти</MyButton>

        </Card>
    );
};

export default ProductItem;