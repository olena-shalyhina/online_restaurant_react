import { IDish } from '../types/types';

import { calcTotalPrice } from './calcTotalPrice';

interface IStorageData {
  listData: IDish[];
  totalData: number;
}

export const createStorage = (selectedDishes: IDish[]) => {
  const dishesList = JSON.stringify(selectedDishes);
  localStorage.setItem('dishes', dishesList);
};

export const getStorage = (): IStorageData => {
  const data = localStorage.getItem('dishes');
  const listData: IDish[] = data ? JSON.parse(data) : [];
  const totalData = calcTotalPrice(listData);

  return {
    listData,
    totalData,
  };
};
