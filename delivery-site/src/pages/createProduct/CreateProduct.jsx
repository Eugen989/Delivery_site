import classes from "./createProduct.module.css";
import {InputEdit} from "../../components/UI/input/MyInput.jsx";
import {MyButton2} from "../../components/UI/button/MyButton.jsx";
import React from "react";

const CreateProduct = () => {
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
                    <h2 className="title-2">Добавление товара</h2>
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
                                    <InputEdit type="number" id="sale" name="sale" placeholder="Скидка"/>
                                    <textarea name="description" rows="5" placeholder="О товаре"></textarea>
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