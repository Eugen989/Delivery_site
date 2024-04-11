import "./editProduct.css";
import {InputEdit} from "../../components/UI/input/MyInput.jsx";
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
                <div className="edit-wrapper mt-1">
                   <h2 className="title-2">Редактирование товара</h2>
                    <div className="edit-block mt-2">
                        <form action="#" method="post" encType="multipart/form-data">
                            <div className="parameters">
                                <div className="foto-edit">
                                    <div className="media">
                                        <img src="./images/edit.png" alt=""/>
                                    </div>
                                    <input type="file" id="real-input" hidden onChange={handleFileChange}/>
                                    <label htmlFor="real-input" className="custom-file-upload">{fileName}</label>
                                </div>
                                <div className="edit-body">
                                    <InputEdit type="text" name="name" placeholder="Наименование товара" required/>
                                    <InputEdit type="text" name="size" placeholder="Размер товара" required/>
                                    <InputEdit type="number" name="mass" placeholder="Масса товара" required/>
                                    <InputEdit type="number" id="price" name="price" placeholder="Цена товара"
                                               required/>
                                    <InputEdit type="number" id="sale" name="sale" placeholder="Скидка"/>
                                    <textarea name="description" rows="5" placeholder="О товаре"></textarea>

                                </div>
                            </div>
                            <div className="edit-route mt-2">
                                <h3 className="title-3">
                                    Данные о маршрутах
                                </h3>
                                <div className="edit-body">
                                    <InputEdit type="text" name="from" placeholder="Откуда" required/>
                                    <InputEdit type="text" name="to" placeholder="Куда" required/>
                                </div>
                                <div className="edit-btn">
                                    <MyButton2 type="button" id="cancelButton">Отменить</MyButton2>
                                    <MyButton2 type="submit">Сохранить</MyButton2>
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