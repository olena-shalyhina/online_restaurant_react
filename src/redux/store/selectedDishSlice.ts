import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDish } from '../../types/types';

interface ISelectedDishesState {
  list: IDish[];
  total: number;
}

const initialState: ISelectedDishesState = {
  list: [],
  total: 0,
};

export const selectedDishesSlice = createSlice({
  name: 'selectedDishes',
  initialState,
  reducers: {
    addDish(state, action: PayloadAction<IDish>) {
      const listItem = state.list.find((dish) => dish.id === action.payload.id);

      if (listItem) {
        listItem.number++;
      } else {
        state.list.push({
          ...action.payload,
          number: 1,
        });
      }
      state.total = state.list.reduce((total, currentDish) => {
        return total + currentDish.number * currentDish.price;
      }, 0);
    },

    removeDish(state, action: PayloadAction<string>) {
      const listItem = state.list.find((dish) => dish.id === action.payload);

      if (listItem && listItem.number > 1) {
        listItem.number--;
      } else
        state.list = state.list.filter((dish) => dish.id !== action.payload);

      state.total = state.list.reduce((total, currentDish) => {
        return total + currentDish.number * currentDish.price;
      }, 0);
    },

    clearList(state) {
      state.list = [];
    },
  },
});

export const { addDish, removeDish, clearList } = selectedDishesSlice.actions;

export default selectedDishesSlice.reducer;
