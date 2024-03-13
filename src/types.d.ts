

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