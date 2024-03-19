import { useEffect, useState } from "react";
import { Item } from "../types";
import ProductsService from "../services/ProductsService";



const useGetItem = (id: number) => {
    const [item, setItem] = useState<Item>();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        const fetchItem = async () => {
            try {
                const { data } = await ProductsService.getProduct<{ item: Item }>(id);
                setItem(data.item);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItem();

    }, [id])

    return { item, isLoading };
}
export default useGetItem