import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { SelectedDishesList } from './SelectedDihesList';
import { Modal } from 'react-bootstrap';

import '../styles/cart.scss';
import { useAppSelector } from '../redux/store/reduxHook';

export const Cart: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedDishes = useAppSelector((state) => state.dishes.list);
  console.log(selectedDishes, '--- массив выбранных блюд в state ---');

  const sumSelectedDishesNumber = selectedDishes.reduce(
    (total: number, currentDish) => {
      return total + currentDish.number;
    },
    0,
  );

  return (
    <div className="cart_wrapper mx-2">
      <Button variant="danger" onClick={handleShow} className="ml-5">
        <i className="bi bi-cart-check-fill fs-6"></i>
      </Button>
      {selectedDishes.length > 0 && (
        <div className="cart_orders_count fw-bold text-success bg-warning">
          {sumSelectedDishesNumber}
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-secondary" closeButton>
          <Modal.Title className="text-light">YOUR ORDER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SelectedDishesList />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Go to pay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
