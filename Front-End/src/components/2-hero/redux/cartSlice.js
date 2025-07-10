import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === id);

      if (existingIndex !== -1) {
        state.items[existingIndex].quantity += quantity;
        state.items[existingIndex].total += price * quantity;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity,
          total: price * quantity,
        });
        state.totalQuantity += 1; // only increase when a new product is added
      }

      state.totalPrice += price * quantity;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);
      if (!itemToRemove) return;

      state.totalPrice -= itemToRemove.total;
      state.totalQuantity -= 1;

      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
