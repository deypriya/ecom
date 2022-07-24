import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push({ ...action.payload, qty: 1 });
		},
		increaseItem: (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.id);
			item.qty++;
		},
		decreaseItem: (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.id);
			if (item.qty === 1) {
				state.items = state.items.filter((item) => item.id !== action.payload.id);
			} else {
				item.qty--;
			}
		},
	},
});
export default cartSlice.reducer;
export const { addItem, increaseItem, decreaseItem } = cartSlice.actions;
