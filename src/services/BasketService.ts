import { AxiosResponse } from "axios";
import { createApiFromPath } from "../api";
import { BasketItem } from "../types";

interface BasketData {
    basket: {
        id: number,
        items: BasketItem[]
    }
}


export default class BasketService {
    private static api = createApiFromPath("/basket");

    static getBasket = async (): Promise<AxiosResponse<BasketData>> => {
        return this.api.get("/");
    }

    static addBasketItem = async (id: number): Promise<AxiosResponse<{ item: BasketItem }>> => {
        return this.api.post("/add", { id });
    }

    static deleteBasketItems = async (ids: number[]) => {
        return this.api.delete("/delete", { data: { ids } });
    }
}