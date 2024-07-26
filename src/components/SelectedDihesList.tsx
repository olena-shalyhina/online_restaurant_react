import { FC } from 'react';
import { useAppSelector } from '../redux/store/reduxHook';

import { SelectedDishItem } from './SelectedDishItem';
import { ListGroup } from 'react-bootstrap';

export const SelectedDishesList: FC = () => {
  const selectedDishes = useAppSelector((state) => state.dishes.list);
  const totalPrice = useAppSelector((state) => state.dishes.total);

  console.log(totalPrice, '--- totalPrice ---');
  console.log(selectedDishes, '--- selectedDishes ---');
  return (
    <div>
      {selectedDishes.length ? (
        <div>
          <ListGroup>
            {selectedDishes.map((dish) => (
              <SelectedDishItem key={dish.id} dish={dish} />
            ))}
          </ListGroup>
          <div className="d-flex justify-content-between mx-auto mt-4 fw-bold w-100">
            <p className="px-3 text-success">TOTAL</p>
            <p className="px-3 text-success">
              {' '}
              &#8364; {totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div>
          Your basket is empty. Go to the menu and place your order, please.
        </div>
      )}
    </div>
  );
};
