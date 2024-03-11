import { Params } from 'react-router-dom';
import { createApiFromPath } from './../api/index';


export default class Products {
    private static api = createApiFromPath("/products");

    static getProducts = async (params: Params) => {
        return this.api.get("/get", params);
    }
}