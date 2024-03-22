import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IState {
    firstName: string;
    isLoggedIn: boolean;
}

const initialState: IState = {
    firstName: "",
    isLoggedIn: false
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
            state.isLoggedIn = true;
        }
    },
    selectors: {
        selectUser: (state) => {
            return state.firstName;
        },
        selectAuthStatus: (state) => {
            return state.isLoggedIn;
        }
    }
})

export const { setUser } = userSlice.actions;
export const { selectUser, selectAuthStatus } = userSlice.selectors;

export default userSlice.reducer;