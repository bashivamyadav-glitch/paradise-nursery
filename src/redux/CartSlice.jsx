import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);
      if (!exist) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.totalQuantity--;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const exist = state.items.find((i) => i.id === id);
      if (exist && quantity > 0) {
        exist.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
