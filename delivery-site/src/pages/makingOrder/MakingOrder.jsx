import classes from "./makingOrder.module.css"
import Map from "../../components/map/Map.jsx";

const MakingOrder = () => {
    return (
        <div className="makingOrder">
            <div className="centring">
                <div className={`${classes.makingWrapper} mt-1`}>
                    <h2 className="title-2">Оформление заказа</h2>
                    <div className={`${classes.makingBody} mt-2`}>
                        <div className="formBlock">
                            <form action="#" method="post">

                                <label htmlFor="shippingMethod">Способ доставки</label>
                                <select id="shippingMethod" name="shippingMethod">
                                    <option value="cheap">Дешевый</option>
                                    <option value="fast">Быстрый</option>
                                </select>

                                <label htmlFor="deliverySity">Город доставки</label>
                                <select id="deliverySity" name="deliverySity">
                                    {/*Варианты доставки*/}
                                </select>
                                <label htmlFor="deliveryPoint">Пункт выдачи</label>
                                <select id="deliveryPoint" name="deliveryPoint">
                                    {/*Варианты доставки*/}
                                </select>
                                <div className={classes.paymentUponReceipt}>
                                    <label htmlFor="payOnDelivery">
                                        Оплата при получении:
                                    </label>
                                    <input type="checkbox" id="payOnDelivery" name="payOnDelivery" checked/>
                                </div>

                                <button type="submit">Подтвердить заказ</button>
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