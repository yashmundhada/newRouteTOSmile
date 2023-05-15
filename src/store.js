import { configureStore } from "@reduxjs/toolkit";
import ProductRedux from "./redux/ProductRedux";

//crated a store
const store = configureStore({
  reducer: {
    product: ProductRedux
  }
});

export default store;
