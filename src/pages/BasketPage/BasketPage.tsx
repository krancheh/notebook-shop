import Button from "../../components/Common/Button/Button";
import Card from "../../components/Common/Card/Card";
import Item from "../../components/Item/Item";
import useGetBasketItems from "../../hooks/useGetBasketItems";
import { useAppSelector } from "../../store";
import { selectBasketItems } from "../../store/basketSlice";
import styles from "./BasketPage.module.scss";
import UpIcon from "../../assets/icons/arrow-up.svg";
import { useEffect, useState } from "react";


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
                    {/* <Card>
                        <label>
                            <input type="checkbox" />
                            Выбрать все
                        </label>
                    </Card> */}
                    <div className={styles.basket}>
                        {
                            basketItems.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.count}>
                                        <Button><UpIcon /></Button>
                                        <span>{item.basketItemsIds.length}</span>
                                        <Button><UpIcon className={styles.removeItemButton} /></Button>
                                    </div>
                                    <Item item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Card>
                    <h2>Итого: {totalPrice}</h2>
                    <Button type="main">Перейти к оплате</Button>
                    <Button>Очистить корзину</Button>
                </Card>
            </div>
        </div>
    )
}
export default BasketPage