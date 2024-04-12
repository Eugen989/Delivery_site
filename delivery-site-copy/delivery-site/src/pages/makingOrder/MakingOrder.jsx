import classes from "./makingOrder.module.css"
import {InputCheck, InputSelect} from "../../components/UI/input/MyInput.jsx";
import {MyButton1} from "../../components/UI/button/MyButton.jsx";
import Map from "../../components/map/Map.jsx";
import React, { useState } from 'react';

const MakingOrder = () => {
    const [resChecked, setChecked] = useState(true)
    return (
        <div className="makingOrder">
            <div className="centring">
                <div className={`${classes.makingWrapper} mt-1`}>
                    <h2 className="title-2">Оформление заказа</h2>
                    <div className={`${classes.makingBody} mt-2`}>
                        <div className="formBlock">
                            <form action="#" method="post" className={classes.formBody}>

                                <label htmlFor="shippingMethod">Способ доставки</label>
                                <InputSelect id="shippingMethod" name="shippingMethod">
                                    <option value="cheap">Дешевый</option>
                                    <option value="fast">Быстрый</option>
                                </InputSelect>

                                <label htmlFor="deliveryPoint">Пункт выдачи</label>
                                <InputSelect id="deliveryPoint" name="deliveryPoint">
                                    {/*Варианты доставки*/}
                                </InputSelect>

                                <div className={classes.paymentUponReceipt}>
                                    <InputCheck isChecked={resChecked} onChange={setChecked}>
                                        Оплата при получении:
                                    </InputCheck>
                                </div>

                                <MyButton1 type="submit">
                                    Подтвердить заказ
                                </MyButton1>
                            </form>
                        </div>
                        <div className="map">
                            <Map></Map>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MakingOrder;