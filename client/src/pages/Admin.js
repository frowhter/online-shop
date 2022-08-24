import React, {useState} from 'react';
import Container from "../components/UI/container/Container";
import MyButton from "../components/UI/button/MyButton";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container style={{width: '100%'}}>
            <div style={{ width: '100%',display: "grid", gridTemplateRows: "auto"}}>
                <MyButton
                    style={{width: '100%'}}
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </MyButton>
                <MyButton
                    style={{width: '100%'}}
                >
                    Добавить категорию
                </MyButton>
                <MyButton
                    style={{width: '100%'}}
                    onClick={() => setProductVisible(true)}
                >
                    Добавить устройство
                </MyButton>
            </div>
            <CreateType show={typeVisible} onHide={() =>setTypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() =>setProductVisible(false)}/>

        </Container>
    );
};

export default Admin;