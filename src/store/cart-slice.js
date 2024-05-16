import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
	totalItems: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.items.push(action.payload);
			state.totalPrice += action.payload.price;
			state.totalItems += 1;
		},
		removeFromCart: (state, action) => {
			const index = state.items.findIndex(
				(item) => item._id === action.payload._id
			);
			if (index !== -1) {
				state.totalPrice -= state.items[index].price;
				state.items.splice(index, 1);
				state.totalItems -= 1;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
