import { IDish } from '../types/types';

export const calcTotalPrice = (listItems: IDish[]): number => {
  return listItems.reduce((total, currentDish) => {
    return total + currentDish.number * currentDish.price;
  }, 0);
};
