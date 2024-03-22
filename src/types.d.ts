

export interface Params {
    [key: string]: string | number;
}

export interface LoginUserData {
    email: string;
    password: string;
}
export interface SignupUserData extends LoginUserData {
    firstName: string;
    lastName: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export type TResponse<T> = {
    data: T;
}


type ItemInfo = {
    id: number;
    title: string;
    description: string;
}

type Brand_Type = {
    id: number;
    name: string;
}



export interface Item {
    id: number;
    brand: Brand_Type;
    name: string;
    type: Brand_Type;
    price: number;
    img: string;
    info: ItemInfo[];
}


export interface BasketItem extends Item {
    basketItemId: number;
}

export interface BasketItemCounted extends Item {
    basketItemsIds?: number[];
}