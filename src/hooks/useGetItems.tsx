import { useEffect, useState } from "react"
import { Item } from "../types";
import ProductsService, { GetItemsParams } from "../services/ProductsService";


const useGetItems = (params?: GetItemsParams) => {
    // const { limit, page, brandId, typeId } = params;
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setIsLoading(true);
                const { data } = await ProductsService.getProducts<{ items: Item[] }>(params);
                if (Array.isArray(data.items)) {
                    setItems(data.items);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItems();

    }, [params])

    return { items, isLoading };
}
export default useGetItems