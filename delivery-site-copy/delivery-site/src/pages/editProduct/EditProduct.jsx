import classes from "./editProduct.module.css";
import {InputEdit, TextareaEdit} from "../../components/UI/input/MyInput.jsx";
import {MyButton2} from "../../components/UI/button/MyButton.jsx";
import React, { useState } from "react";
import { eventNames } from "../../../../delivery-server/settings/db.js";

const CreateProduct = () => {

    let [product, setProduct] = useState({
        name: "",
        size: 0,
        weight: 0,
        price: 0,
        sale: 0,
        warehouseX: 0,
        warehouseY: 0,
        pickUpX: 0,
        pickUpY: 0,
        description: ""
    });


    // const [fileName, setFileName] = React.useState('Загрузить изображение');

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (!file) return;
    //     setFileName("Изображение загружено");
    // };

    let handleProductChange = async (event) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signUp', {
                name: formData.name,
                proportions: formData.proportions,
                weight: formData.weight,
                price: formData.price,
                sale: formData.sale,
                warehouseX: formData.warehouseX,
                warehouseY: formData.warehouseY,
                pickUpX: formData.pickUpX,
                pickUpY: formData.pickUpY,
                description: formData.description
            });
            console.log(response.data);
            window.location.href=('/profile')
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
                        <form action="#" method="post" encType="multipart/form-data">
                            <div className={classes.parameters}>
                                <div className={classes.fotoEdit}>
                                    <div className={classes.media}>
                                        <img src="./images/edit.png" alt=""/>
                                    </div>
                                    <input type="file" id="real-input" hidden onChange={handleProductChange}/>
                                    <label htmlFor="real-input" className={classes.customFileUpload}>{fileName}</label>
                                </div>
                                <div className={classes.editBody}>
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
                                    <div className={classes.editBtn}>
                                        <MyButton2 type="button" id="cancelButton">Отменить</MyButton2>
                                        <MyButton2 type="submit">Сохранение</MyButton2>
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