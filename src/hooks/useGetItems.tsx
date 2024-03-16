import { useEffect, useState } from "react"
import { Item } from "../types";
import ProductsService, { GetItemsParams } from "../services/ProductsService";


const useGetItems = (params?: GetItemsParams) => {
    // const { limit, page, brandId, typeId } = params;
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            const fetchItems = async () => {
                setIsLoading(true);
                const { data } = await ProductsService.getProducts<{ items: Item[] }>(params);
                setItems(data.items);
            }
            fetchItems();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }, [params])

    return { items, isLoading };
}
export default useGetItems