import { FC } from 'react';
import { useAppDispatch } from '../redux/store/reduxHook';
import { addDish, removeDish } from '../redux/store/selectedDishSlice';
import { IDish } from '../types/types';

import Button from 'react-bootstrap/Button';
import { ListGroupItem } from 'react-bootstrap';

interface SelectedDishItemProps {
  dish: IDish;
}

export const SelectedDishItem: FC<SelectedDishItemProps> = ({ dish }) => {
  const dispatch = useAppDispatch();
  const { id, title, icon, price, number } = dish;

  return (
    <ListGroupItem className="bg-bs-light mb-3">
      <div className="dish_item d-flex justify-content-between align-items-center gap-4">
        <img
          src={icon}
          alt="Dish image"
          style={{ width: 'clamp(50px, 18vw, 150px)' }}
          className="rounded-circle"
        />
        <div className="text-center d-flex flex-column justify-content-between w-100">
          <p className="text-start">{title}</p>
          <div className="d-flex justify-content-between align-items-center gap-5">
            <div className="text-success">&#8364; {price.toFixed(2)}</div>
            <div className="text-center d-flex gap-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => dispatch(addDish(dish))}
              >
                +
              </Button>
              <div className="text-center p-1 fw-bold">{number}</div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(removeDish(id))}
              >
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};
