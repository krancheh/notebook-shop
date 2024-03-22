import { useState } from "react";
import BasketService from "../services/BasketService";
import { useAppDispatch } from "../store";
import { removeBasketItems } from "../store/basketSlice";

const useRemoveFromBasket = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useAppDispatch();

    const removeFromBasket = async (ids: number[]) => {
        try {
            setIsLoading(true);
            const { data } = await BasketService.deleteBasketItems(ids);
            dispatch(removeBasketItems(ids));
            return data;
        } catch (e) {
            console.log(e);
            if (e.response.data.message) {
                setError(e.response.data.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return { removeFromBasket, isLoading, error };
}
export default useRemoveFromBasket