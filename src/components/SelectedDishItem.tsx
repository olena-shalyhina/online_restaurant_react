import { FC } from 'react';
import { useAppDispatch } from '../redux/store/reduxHook';
import { removeDish } from '../redux/store/selectedDishSlice';
import { IDish } from '../types/types';

import Button from 'react-bootstrap/Button';
import { ListGroupItem } from 'react-bootstrap';

interface SelectedDishItemProps {
  dish: IDish;
}

export const SelectedDishItem: FC<SelectedDishItemProps> = ({
  dish: { id, icon, title, price },
}) => {
  const dispatch = useAppDispatch();

  return (
    <ListGroupItem className="bg-bs-light">
      <div className="dish_item d-flex justify-content-between align-items-center">
        <img src={icon} alt="" />
        <p>{title}</p>
        <p>{price}</p>
        <Button variant="danger" onClick={() => dispatch(removeDish(id))}>
          DEL
        </Button>
      </div>
    </ListGroupItem>
  );
};
