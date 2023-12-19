import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { SingalAccountDetailsType } from "../../types/types.ts";

export interface accountsSliceType {
  loading: boolean;
  selectedAccountId: string | null;
  singalAccountDetails: SingalAccountDetailsType | null;
}
export const initialState: accountsSliceType = {
  loading: false,
  singalAccountDetails: null,
  selectedAccountId: null,
};

export const accountsSlice = createSlice({
  name: "accountsSlice",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setSingalAccountData: (state, action) => {
      state.singalAccountDetails = action.payload.accountData;
    },
    setSelectedAccountId: (state, action) => {
      state.selectedAccountId = action.payload.id;
    },
    clearSingalAccountData: (state) => {
      state.singalAccountDetails = null;
      state.selectedAccountId = null;
    },
  },
});
export const {
  setLoading,
  setSingalAccountData,
  clearSingalAccountData,
  setSelectedAccountId,
} = accountsSlice.actions;
export const getAccountsLoadingSlice = (state: RootState): boolean =>
  state.accounts.loading;
export const getSelectedAccountId = (state: RootState) =>
  state.accounts.selectedAccountId;
export const getSingalAccountSlice = (state: RootState) =>
  state.accounts.singalAccountDetails;
export default accountsSlice.reducer;

// AccountSlice.test.tsx
// import configureStore from "@reduxjs/toolkit";
// import {
//   setLoading,
//   setSingalAccountData,
//   clearSingalAccountData,
//   setSelectedAccountId,
// } from "./accountsSlice"; // Assuming this file is in the same directory

// // Import your reducer
// import accountsReducer, { initialState } from "./accountsSlice";

// // Test case 1: Test the initial state
// test("initial state is correct", () => {
//   const state = accountsReducer(undefined, { type: "nonexistent" });
//   expect(state).toEqual(initialState);
// });

// // Test case 2: Test setLoading action
// test("setLoading action sets loading state", () => {
//   const state = accountsReducer(initialState, setLoading({ loading: true }));
//   expect(state.loading).toEqual(true);
// });

// // Test case 3: Test setSingalAccountData action
// test("setSingalAccountData action sets account data", () => {
//   const accountData = {
//     /* Your account data object */
//   };
//   const state = accountsReducer(
//     initialState,
//     setSingalAccountData({ accountData })
//   );
//   expect(state.singalAccountDetails).toEqual(accountData);
// });

// // Test case 4: Test setSelectedAccountId action
// test("setSelectedAccountId action sets selected account ID", () => {
//   const selectedId = "someId";
//   const state = accountsReducer(
//     initialState,
//     setSelectedAccountId({ id: selectedId })
//   );
//   expect(state.selectedAccountId).toEqual(selectedId);
// });

// // Test case 5: Test clearSingalAccountData action
// test("clearSingalAccountData action clears account data and selected account ID", () => {
//   const stateWithAccountData = {
//     loading: false,
//     singalAccountDetails: {
//       /* Some account data */
//     },
//     selectedAccountId: "someId",
//   };
//   const state = accountsReducer(stateWithAccountData, clearSingalAccountData());
//   expect(state.singalAccountDetails).toBeNull();
//   expect(state.selectedAccountId).toBeNull();
// });
