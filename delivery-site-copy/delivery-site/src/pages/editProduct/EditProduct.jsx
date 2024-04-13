import classes from "./editProduct.module.css";
import {InputEdit, TextareaEdit} from "../../components/UI/input/MyInput.jsx";
import {MyButton2} from "../../components/UI/button/MyButton.jsx";
import React from "react";

const EditProduct = () => {
    const [fileName, setFileName] = React.useState('Загрузить изображение');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setFileName("Изображение загружено");
    };

    return (
        <div className="edit">
            <div className="centring">
                <div className="editWrapper mt-1">
                    <h2 className="title-2">Редактирование товара</h2>
                    <div className={`${classes.editBlock} mt-2`}>
                        <form action="#" method="post" encType="multipart/form-data">
                            <div className={classes.parameters}>
                                <div className={classes.fotoEdit}>
                                    <div className={classes.media}>
                                        <img src="./images/edit.png" alt=""/>
                                    </div>
                                    <input type="file" id="real-input" hidden onChange={handleFileChange}/>
                                    <label htmlFor="real-input" className={classes.customFileUpload}>{fileName}</label>
                                </div>
                                <div className={classes.editBody}>
                                    <InputEdit type="text" name="name" placeholder="Наименование товара" required/>
                                    <InputEdit type="text" name="size" placeholder="Размер товара" required/>
                                    <InputEdit type="number" name="mass" placeholder="Масса товара" required/>
                                    <InputEdit type="number" id="price" name="price" placeholder="Цена товара"
                                               required/>
                                    <InputEdit type="text" id="sale" name="sale" placeholder="Скидка"/>
                                    <InputEdit type="text" id="warehouseX" name="warehouseX" placeholder="Х точка склада"/>
                                    <InputEdit type="text" id="warehouseY" name="warehouseY" placeholder="Y точка склада"/>
                                    <InputEdit type="text" id="pickUpX" name="pickUpX" placeholder="Х точка выдачи"/>
                                    <InputEdit type="text" id="pickUpY" name="pickUpY" placeholder="Y точка выдачи"/>
                                    <TextareaEdit name="description" placeholder="О товаре" rows="5"></TextareaEdit>
                                    <div className={classes.editBtn}>
                                        <MyButton2 type="button" id="cancelButton">Отменить</MyButton2>
                                        <MyButton2 type="submit">Сохранить</MyButton2>
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
export default EditProduct;