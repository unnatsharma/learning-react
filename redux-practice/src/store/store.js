import { createSlice, configureStore } from "@reduxjs/toolkit";

const initiaState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initiaState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initiaState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };


const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions =  counterSlice.actions;
export default store;
