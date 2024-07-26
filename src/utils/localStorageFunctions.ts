import { IDish } from '../types/types';
import { calcTotalPrice } from './calcTotalPrice';

export const createStorage = (selectedDishes: IDish[]) => {
  const dishesList = JSON.stringify(selectedDishes);
  localStorage.setItem('dishes', dishesList);
};

export const getStorage = () => {
  const data = localStorage.getItem('dishes');
  const listData = data ? JSON.parse(data) : [];
  const totalData = calcTotalPrice(listData);

  return {
    listData,
    totalData,
  };
};
