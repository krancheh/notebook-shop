import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { addBasketItem } from "../store/basketSlice";
import { selectAuthStatus } from "../store/userSlice";
import BasketService from "../services/BasketService";
import { Item } from "../types";
import { useState } from "react";

const useAddToBasket = () => {
    const isLoggedIn = useAppSelector(selectAuthStatus);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const addToBasket = async (item: Item) => {
        setIsLoading(true);

        if (isLoggedIn) {
            try {
                const { data } = await BasketService.addBasketItem(item.id);
                if (data.item) {
                    return dispatch(addBasketItem(data.item));
                }
                return;
            } catch (e) {
                console.log(e);
                return;
            } finally {
                setIsLoading(false);
            }
        }

        return navigate("/login");
    }

    return { addToBasket, isLoading };
}
export default useAddToBasket