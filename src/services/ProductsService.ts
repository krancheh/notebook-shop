import { AxiosResponse } from 'axios';
import { createApiFromPath } from '../api/index';

export interface GetItemsParams {
    [key: string]: string | number;
    brandId?: number;
    typeId?: number;
    limit?: number;
    page?: number;
}

export default class ProductsService {
    private static api = createApiFromPath("/items");

    static getProducts = async <T>(params: GetItemsParams): Promise<AxiosResponse<T>> => {
        return this.api.get("/get", params);
    }

    static getProduct = async <T>(id: number): Promise<AxiosResponse<T>> => {
        return this.api.get(`/${id}`);
    }
}