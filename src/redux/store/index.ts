import { configureStore } from '@reduxjs/toolkit';
import selectedDishesReducer from './selectedDishSlice';
// ...
const store = configureStore({
  reducer: {
    dishes: selectedDishesReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
