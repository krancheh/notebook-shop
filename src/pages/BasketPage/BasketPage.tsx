import Button from "../../components/Common/Button/Button";
import Card from "../../components/Common/Card/Card";
import Item from "../../components/Item/Item";
import useGetBasketItems from "../../hooks/useGetBasketItems";
import { useAppSelector } from "../../store";
import { selectBasketItems } from "../../store/basketSlice";
import styles from "./BasketPage.module.scss";
import { useEffect, useState } from "react";
import getFormattedPrice from "../../utils/getFormattedPrice";


const BasketPage = () => {
    useGetBasketItems();
    const basketItems = useAppSelector(selectBasketItems);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const totalSum = basketItems.reduce((sum, item) => {
            return sum + item.price * item.basketItemsIds.length;
        }, 0)

        setTotalPrice(totalSum);
    }, [basketItems])

    return (
        <div>
            <div className="wrapper">
                <div className={styles.content}>
                    <h1>Корзина</h1>
                    <p>Всего в корзине: {basketItems.length}</p>
                    <div className={styles.basket}>
                        {
                            basketItems.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <Item item={item} isBasket />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Card className={styles.actions}>
                    <h2>Итого: {getFormattedPrice(totalPrice)} ₽</h2>
                    <Button type="main">Перейти к оплате</Button>
                    <Button>Очистить корзину</Button>
                </Card>
            </div>
        </div>
    )
}
export default BasketPage