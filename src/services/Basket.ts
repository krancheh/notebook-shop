import { createApiFromPath } from "../api"




export default class Basket {
    private static api = createApiFromPath("/basket");

    static getBasket = async () => {
        return this.api.get("/");
    }

    static addBasketItem = async (id: number) => {
        return this.api.post("/add", { data: { id } });
    }

    static deleteBasketItems = async (ids: number[]) => {
        return this.api.delete("/add", { data: { ids } });
    }
}