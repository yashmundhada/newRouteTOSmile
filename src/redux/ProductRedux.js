import { createSlice } from "@reduxjs/toolkit";

const ProductRedux = createSlice({
  name: "product",
  initialState: {
    value: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload.products;
    },
    updateProduct: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeProduct(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    }
  }
});

//exported reducer
export const {
  addProduct,
  updateProduct,
  removeProduct
} = ProductRedux.actions;

//default export the slice
export default ProductRedux.reducer;
