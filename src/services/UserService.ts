import { AxiosResponse } from "axios";
import { createApiFromPath } from "../api";
import { LoginUserData, SignupUserData, User } from "../types";


type UserData = {
    user: User;
}


export default class UserService {
    private static api = createApiFromPath("/users");

    static signup = async (data: SignupUserData): Promise<AxiosResponse<UserData>> => {
        return this.api.post("/signup", data);
    }

    static login = async (data: LoginUserData): Promise<AxiosResponse<UserData>> => {
        return this.api.post("/login", data);
    }

    static auth = async (): Promise<AxiosResponse<UserData>> => {
        return this.api.get("/auth");
    }
}