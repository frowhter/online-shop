import React, {useState} from 'react';
import MyModal from "../UI/MyModal/MyModal";
import Container from "../UI/container/Container";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {createType} from "../../http/productAPI";


const CreateType = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addType = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        createType(formData).then(data => onHide())
    }


    return (
        <MyModal
            visible={show}
            setVisible={onHide}
        >
            <Container style={{display: 'grid', width: '100%', gridTemplateColumns: '1fr'}}>

                    <h2>Добавить тип</h2>
                <hr style={{width: '100%'}}/>
                    <form>
                        <MyInput
                            value = {name}
                            onChange = {e => setName(e.target.value)}
                            style={{border: '1px solid #FCBA6C'}}
                            placeholder={"Введите название типа"}
                        />
                        <MyInput
                            style={{border: '0px'}}
                            type='file'
                            onChange={selectFile}
                        />
                        <hr/>
                    </form>
                    <div style={{display: "flex", gap: 20}}>
                        <MyButton style={{marginLeft: 'auto'}} onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={addType}>Добавить</MyButton>
                    </div>

            </Container>
        </MyModal>
    );
};

export default CreateType;