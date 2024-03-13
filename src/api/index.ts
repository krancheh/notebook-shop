import axios from "axios";
import { Params } from "../types";

const $api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export const createApiFromPath = (basePath: string) => {
    return {
        get: (path: string, params?: Params) => $api.get(`${basePath}${path}`, params),
        post: (path: string, ...args: any[]) => $api.post(`${basePath}${path}`, ...args),
        put: (path: string, ...args: any[]) => $api.get(`${basePath}${path}`, ...args),
        delete: (path: string, ...args: any[]) => $api.delete(`${basePath}${path}`, ...args),
    }
}