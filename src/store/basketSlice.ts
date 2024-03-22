import { PayloadAction, Reducer, createSlice } from "@reduxjs/toolkit";
import { BasketItem, BasketItemCounted } from "../types";


interface IState {
    items: BasketItemCounted[];
}

const initialState: IState = {
    items: []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketItems: (state, action: PayloadAction<BasketItemCounted[]>) => {
            state.items = action.payload;
        },
        addBasketItem: (state, action: PayloadAction<BasketItem>) => {
            const candidate = state.items.find(item => item.id === action.payload.id);
            if (candidate) {
                candidate.basketItemsIds.push(action.payload.basketItemId);
                state.items = [...state.items.filter(item => item.id !== candidate.id), candidate];
            } else {
                const newItem: BasketItemCounted = { ...action.payload, basketItemsIds: [action.payload.basketItemId] };
                state.items = [...state.items, newItem];
            }
        },
        removeBasketItems: (state, action: PayloadAction<number[]>) => {
            state.items = state.items.filter(item => {
                item.basketItemsIds = item.basketItemsIds.filter(id => !action.payload.includes(id));

                return item.basketItemsIds.length > 0;
            });
        },
    },
    selectors: {
        selectBasketItems: (state) => {
            return state.items;
        }
    }
});

export const { setBasketItems, addBasketItem, removeBasketItems } = basketSlice.actions;
export const { selectBasketItems } = basketSlice.selectors;

export default basketSlice.reducer as Reducer<IState>;