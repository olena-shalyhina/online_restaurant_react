import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDish } from '../../types/types';

interface ISelectedDishesState {
  list: IDish[];
}

const initialState: ISelectedDishesState = {
  list: [],
};

export const selectedDishesSlice = createSlice({
  name: 'selectedDishes',
  initialState,
  reducers: {
    addDish(state, action: PayloadAction<IDish>) {
      state.list.push(action.payload);
    },
    removeDish(state, action: PayloadAction<string>) {
      state.list = state.list.filter((dish) => dish.id !== action.payload);
    },
  },
});

export const { addDish, removeDish } = selectedDishesSlice.actions;

export default selectedDishesSlice.reducer;
