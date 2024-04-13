import classes from "./createProduct.module.css";
import { InputEdit, TextareaEdit } from "../../components/UI/input/MyInput.jsx";
import { MyButton2 } from "../../components/UI/button/MyButton.jsx";
import React, { useState } from "react";
// import { connection, eventNames } from "../../../../delivery-server/settings/db.js";
import axios from "axios";

// ваш компонент CreateProduct


const CreateProduct = () => {

    let [product, setProduct] = useState({
        name: "",
        size: "",
        weight: "",
        price: "",
        sale: "",
        nameWarehouse: "",
        warehouseX: "",
        warehouseY: "",
        namePickUp: "",
        pickUpX: "",
        pickUpY: "",
        description: ""
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };


    // const [fileName, setFileName] = React.useState('Загрузить изображение');

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (!file) return;
    //     setFileName("Изображение загружено");
    // };

    let handleProductChange = async (event) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/product/createProduct', {
                name: product.name,
                proportions: product.proportions,
                weight: product.weight,
                price: product.price,
                sale: product.sale,
                nameWarehouse: product.nameWarehouse,
                warehouseX: product.warehouseX,
                warehouseY: product.warehouseY,
                namePickUp: product.namePickUp,
                pickUpX: product.pickUpX,
                pickUpY: product.pickUpY,
                description: product.description
            });
            console.log(response.data);
            // window.location.href=('/profile')
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            // Дополнительные действия при ошибке запроса
        }
    }

    return (
        <div className="edit">
            <div className="centring">
                <div className="editWrapper mt-1">
                    <h2 className="title-2">Добавление товара</h2>
                    <div className={`${classes.editBlock} mt-2`}>
                        <form method="post" encType="multipart/form-data" onSubmit={handleProductChange}>
                            <div className={classes.parameters}>
                                <div className={classes.fotoEdit}>
                                    <div className={classes.media}>
                                        <img src="./images/edit.png" alt=""/>
                                    </div>
                                    <input type="file" id="real-input" hidden onChange={handleChange}/>
                                    <label htmlFor="real-input" className={classes.customFileUpload}>Загрузить файл</label>
                                </div>
                                <div className={classes.editBody}>
<<<<<<< HEAD
                                    <InputEdit type="text" name="name" value={product.name} onChange={handleChange} placeholder="Наименование товара" required/>
                                    <InputEdit type="text" name="proportions" value={product.proportions} onChange={handleChange} placeholder="Размер товара" required/>
                                    <InputEdit type="number" name="weight" value={product.weight} onChange={handleChange} placeholder="Масса товара" required/>
                                    <InputEdit type="number" id="price" name="price" value={product.price} onChange={handleChange} placeholder="Цена товара"required/>
                                    <InputEdit type="text" id="sale" name="sale" value={product.sale} onChange={handleChange} placeholder="Скидка"/>
                                    <InputEdit type="text" id="nameWarehouse" name="nameWarehouse" value={product.nameWarehouse} onChange={handleChange} placeholder="Имя склада"/>
                                    <InputEdit type="text" id="warehouseX" name="warehouseX" value={product.warehouseX} onChange={handleChange} placeholder="Х точка склада"/>
                                    <InputEdit type="text" id="warehouseY" name="warehouseY" value={product.warehouseY} onChange={handleChange} placeholder="Y точка склада"/>
                                    <InputEdit type="text" id="namePickUp" name="namePickUp" value={product.namePickUp} onChange={handleChange} placeholder="Название точка выдачи"/>
                                    <InputEdit type="text" id="pickUpX" name="pickUpX" value={product.pickUpX} onChange={handleChange} placeholder="X точка выдачи"/>
                                    <InputEdit type="text" id="pickUpY" name="pickUpY" value={product.pickUpY} onChange={handleChange} placeholder="Y точка выдачи"/>
                                    <TextareaEdit name="description" value={product.description} onChange={handleChange} placeholder="О товаре" rows="5"></TextareaEdit>
=======
                                    <InputEdit type="text" name="name" value={setProduct.name} placeholder="Наименование товара" required/>
                                    <InputEdit type="text" name="proportions" value={setProduct.proportions} placeholder="Размер товара" required/>
                                    <InputEdit type="number" name="weight" value={setProduct.weight} placeholder="Масса товара" required/>
                                    <InputEdit type="number" id="price" name="price" value={setProduct.price} placeholder="Цена товара"
                                               required/>
                                    <InputEdit type="text" id="sale" name="sale" value={setProduct.sale} placeholder="Скидка"/>
                                    <InputEdit type="text" id="warehouseX" name="warehouseX" value={setProduct.warehouseX} placeholder="Х точка склада"/>
                                    <InputEdit type="text" id="warehouseY" name="warehouseY" value={setProduct.warehouseY} placeholder="Y точка склада"/>
                                    <InputEdit type="text" id="pickUpX" name="pickUpX" value={setProduct.pickUpX} placeholder="Х точка выдачи"/>
                                    <InputEdit type="text" id="pickUpY" name="pickUpY" value={setProduct.pickUpY} placeholder="Y точка выдачи"/>
                                    <InputEdit type="text" id="warehouseName" name="warehouseName" placeholder="Название склада" value="a"/>
                                    <InputEdit type="text" id="pickUpName" name="pickUpName" placeholder="Название пункта выдачи" value="b"/>
                                    <TextareaEdit name="description" value={setProduct.description} placeholder="О товаре" rows="5"></TextareaEdit>
>>>>>>> 9eaf51febb10bddb3a57b384dfc82111f1767764
                                    <div className={classes.editBtn}>
                                        <MyButton2 type="button" id="cancelButton">Отменить</MyButton2>
                                        <MyButton2 type="submit">Добавить</MyButton2>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;