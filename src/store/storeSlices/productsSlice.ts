import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { ProductType } from "../../types/types.ts";

interface productsSliceType {
  loading: boolean;
  selectedProductData: ProductType | null;
}
export const initialState: productsSliceType = {
  loading: false,
  selectedProductData: null,
};

const productsSlice = createSlice({
  name: "accountsSlice",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setSelectedProductData: (state, action) => {
      state.selectedProductData = action.payload.data;
    },
  },
});
export const { setLoading, setSelectedProductData } = productsSlice.actions;
export const getProductsLoadingSlice = (state: RootState): boolean =>
  state.products.loading;
export const getProductSelectedData = (state: RootState) =>
  state.products.selectedProductData;
export default productsSlice.reducer;

// productSlice.test.tsx
// import configureStore from "@reduxjs/toolkit";
// import { setLoading, setSelectedProductData } from "./productsSlice"; // Assuming this file is in the same directory

// // Import your reducer
// import productsReducer, { initialState } from "./productsSlice";

// // Test case 1: Test the initial state
// test("initial state is correct", () => {
//   const state = productsReducer(undefined, { type: "nonexistent" });
//   expect(state).toEqual(initialState);
// });

// // Test case 2: Test setLoading action
// test("setLoading action sets loading state to true", () => {
//   const state = productsReducer(initialState, setLoading({ loading: true }));
//   expect(state.loading).toEqual(true);
// });

// // Test case 3: Test setLoading action with false
// test("setLoading action sets loading state to false", () => {
//   const stateWithLoading = { ...initialState, loading: true };
//   const state = productsReducer(
//     stateWithLoading,
//     setLoading({ loading: false })
//   );
//   expect(state.loading).toEqual(false);
// });

// // Test case 4: Test setSelectedProductData action
// test("setSelectedProductData action sets product data", () => {
//   const productData = { id: 1, name: "Product 1" };
//   const state = productsReducer(
//     initialState,
//     setSelectedProductData({ data: productData })
//   );
//   expect(state.selectedProductData).toEqual(productData);
// });

// // Test case 5: Test setSelectedProductData action with null data
// test("setSelectedProductData action sets product data to null", () => {
//   const stateWithProductData = {
//     loading: false,
//     selectedProductData: { id: 1, name: "Product 1" },
//   };
//   const state = productsReducer(
//     stateWithProductData,
//     setSelectedProductData({ data: null })
//   );
//   expect(state.selectedProductData).toBeNull();
// });

// // Test case 6: Test combined actions with multiple steps
// test("combined actions work together with multiple steps", () => {
//   const stateWithLoading = productsReducer(
//     initialState,
//     setLoading({ loading: true })
//   );

//   const productData = { id: 1, name: "Product 1" };
//   const stateWithProductData = productsReducer(
//     stateWithLoading,
//     setSelectedProductData({ data: productData })
//   );

//   const finalState = productsReducer(
//     stateWithProductData,
//     setLoading({ loading: false })
//   );

//   expect(finalState.loading).toEqual(false);
//   expect(finalState.selectedProductData).toEqual(productData);
// });
