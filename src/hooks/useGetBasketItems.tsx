import { useEffect, useState } from "react";
import BasketService from "../services/BasketService";
import { BasketItemCounted } from "../types";
import { useAppDispatch, useAppSelector } from "../store";
import { setBasketItems } from "../store/basketSlice";
import { selectAuthStatus } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const useGetBasketItems = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const isLoggedIn = useAppSelector(selectAuthStatus);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getBasketItems = async () => {
            if (!isLoggedIn) {
                return navigate("/login");
            }

            try {
                setIsLoading(true);
                const { data } = await BasketService.getBasket(); // api get basket

                const uniqueItems: BasketItemCounted[] = Object.values(data.basket.items.reduce((acc, item) => {
                    if (acc[item.id]) {
                        acc[item.id].basketItemsIds.push(item.basketItemId);
                    } else {
                        acc[item.id] = { ...item, basketItemsIds: [item.basketItemId] };
                    }
                    return acc;
                }, {} as Record<number, BasketItemCounted>));

                dispatch(setBasketItems(uniqueItems))
            } catch (e) {
                console.log(e);
                if (e.response.data.message) {
                    setError(e.response.data.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        getBasketItems();
    }, [])

    return { isLoading, error };
}
export default useGetBasketItems;