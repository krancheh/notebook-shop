import { Axios } from "axios";
import { Params } from "react-router-dom";

const $api = new Axios({
    baseURL: process.env.BASE_URL,
    withCredentials: true
})

export const createApiFromPath = (basePath: string) => {
    return {
        get: (path: string, params: Params) => $api.get(`${basePath}${path}`, params),
        post: (path: string, ...args: any[]) => $api.post(`${basePath}${path}`, ...args),
        put: (path: string, ...args: any[]) => $api.get(`${basePath}${path}`, ...args),
    }
}