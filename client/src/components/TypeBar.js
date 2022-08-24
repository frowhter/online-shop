import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {CATALOG_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import Column3 from "./UI/columns/Column3";
import Card from "./UI/card/Card";
import Container from "./UI/container/Container";


const TypeBar = observer(() => {
    const {product} = useContext(Context)
    const history = useNavigate()

    return (
        <Container>
            <Column3>
                {product.types.map(type =>

                    <Card
                        onClick={()=> {
                            history(CATALOG_ROUTE + '/' + type.id)
                            product.setSelectedType(type)
                        }}
                        key={type.id}
                        style={{boxShadow: 'none', padding: 'none', margin: 'auto'}}
                    >

                        <img style={{margin: 'auto', maxWidth: '100%'}} src={process.env.REACT_APP_API_URL + type.img} alt={type.name}/>

                        <label style={{width: "fit-content"}}>{type.name}</label>
                    </Card>


                )}
            </Column3>
        </Container>

    );
});

export default TypeBar;