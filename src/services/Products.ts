import { createApiFromPath } from './../api/index';

interface GetItemsParams {
    [key: string]: string | number;
    brandId?: number;
    typeId?: number;
    limit?: number;
    page?: number;
}

export default class Products {
    private static api = createApiFromPath("/items");

    static getProducts = async (params: GetItemsParams) => {
        return this.api.get("/get", params);
    }
}