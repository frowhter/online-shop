import React, {useContext, useState} from 'react';
import MyModal from "../UI/MyModal/MyModal";
import Container from "../UI/container/Container";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {Context} from "../../index";
import MySelect from "../UI/select/MySelect";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {createProduct, createType, fetchProducts, fetchTypes} from "../../http/productAPI";
import Dropdown from "../UI/dropdown/Dropdown";


const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)


    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    },[])


    const [dropDown, setDropDown] = useState('')
    const [info, setInfo] = useState([])
    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (e, number) => {
        e.preventDefault()
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => onHide())
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }


    return (
        <MyModal
            visible={show}
            setVisible={onHide}
        >
            <Container style={{display: 'grid', width: '100%', gridTemplateColumns: '1fr'}}>

                <h2>Добавить продукт</h2>
                <hr style={{width: '100%'}}/>
                <form>
                    <Dropdown defaultLabel={product.selectedType.name ? product.selectedType.name+' v' : "Выберите тип v"}>

                            {product.types.map(type =>
                                <div style={{padding: '10px', border: '1px solid lightgray', borderTop : 0}}
                                    onClick={() => product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </div>
                            )}

                    </Dropdown>

                    <MyInput
                        style={{border: '1px solid #FCBA6C'}}
                        placeholder={"Введите название продукта"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <MyInput
                        style={{border: '1px solid #FCBA6C'}}
                        placeholder={"Введите стоимость стоимость продукта"}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <MyInput
                        style={{border: '0px'}}
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <MyButton
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </MyButton>
                    {info.map(i =>
                            <div key={i.number} style={{display: "grid", gridTemplateColumns: '1fr 1fr auto'}}>
                                <MyInput
                                    style={{border: '1px solid #FCBA6C'}}
                                    placeholder={'Введите название свойства'}
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number) }
                                />
                                <MyInput
                                    style={{border: '1px solid #FCBA6C'}}
                                    placeholder={'Введите описание свойства'}
                                    value={i.description}
                                    onChange={(e)=> changeInfo('description', e.target.value, i.number) }
                                />
                                <MyButton
                                    onClick={(e) => removeInfo(e,i.number)}
                                    style={{marginLeft: 20}}>Удалить</MyButton>
                            </div>

                    )}
                </form>
                <div style={{display: "flex", gap: 50}}>
                    <MyButton onClick={onHide}>Закрыть</MyButton>
                    <MyButton onClick={addProduct}>Добавить</MyButton>
                </div>


            </Container>
        </MyModal>
    );
});

export default CreateProduct;