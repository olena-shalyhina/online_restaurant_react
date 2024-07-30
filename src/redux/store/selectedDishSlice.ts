import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStorage } from '../../utils/localStorageFunctions';

import { IDish } from '../../types/types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

interface ISelectedDishesState {
  list: IDish[];
  total: number;
}

const { listData, totalData } = getStorage();

const initialState: ISelectedDishesState = {
  list: listData,
  total: totalData,
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

      state.total = calcTotalPrice(state.list);
    },

    removeDish(state, action: PayloadAction<string>) {
      const listItem = state.list.find((dish) => dish.id === action.payload);

      if (listItem && listItem.number > 1) {
        listItem.number--;
      } else
        state.list = state.list.filter((dish) => dish.id !== action.payload);

      state.total = calcTotalPrice(state.list);
    },

    clearList(state) {
      state.list = [];
    },
  },
});

export const { addDish, removeDish, clearList } = selectedDishesSlice.actions;

export default selectedDishesSlice.reducer;
