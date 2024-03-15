import { createApiFromPath } from "../api";
import { LoginUserData, SignupUserData } from "../types";




export default class UserService {
    private static api = createApiFromPath("/users");

    static signup = async (data: SignupUserData) => {
        return this.api.post("/signup", data);
    }

    static login = async (data: LoginUserData) => {
        return this.api.post("/login", data);
    }

    static auth = async () => {
        return this.api.get("/auth");
    }
}