import { FC } from 'react';
import { useAppSelector } from '../redux/store/reduxHook';

import { SelectedDishItem } from './SelectedDishItem';
import { ListGroup } from 'react-bootstrap';

export const SelectedDishesList: FC = () => {
  const selectedDishes = useAppSelector((state) => state.dishes.list);

  return (
    <div>
      {selectedDishes ? (
        <div>
          <ListGroup>
            {selectedDishes.map((dish) => (
              <SelectedDishItem key={dish.id} dish={dish} />
            ))}
          </ListGroup>
          <div>ИТОГО</div>
        </div>
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
};
