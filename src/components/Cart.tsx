import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { SelectedDishesList } from './SelectedDihesList';
import { Alert, CloseButton, Modal } from 'react-bootstrap';

import '../styles/cart.scss';
import { useAppSelector, useAppDispatch } from '../redux/store/reduxHook';
import { clearList } from '../redux/store/selectedDishSlice';

export const Cart: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAllert, setShowAlert] = useState<boolean>(false);
  const handleClick = () => {
    setShowAlert(true);
  };

  const dispatch = useAppDispatch();
  const selectedDishes = useAppSelector((state) => state.dishes.list);
  console.log(selectedDishes, '--- массив выбранных блюд в state ---');

  const sumSelectedDishesNumber = selectedDishes.reduce(
    (total: number, currentDish) => {
      return total + currentDish.number;
    },
    0,
  );

  return (
    <>
      <div className='cart_wrapper mx-2'>
        <Button variant='danger' onClick={handleShow} className='ms-2 outlined'>
          <i className='bi bi-cart-check-fill'></i>
        </Button>
        {selectedDishes.length > 0 && (
          <div className='cart_orders_count fw-bold text-success bg-light '>
            {sumSelectedDishesNumber}
          </div>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            className='bg-danger border border-danger border-1 '
            closeButton
          >
            <Modal.Title className='text-light'>YOUR ORDER</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark text-light border border-danger border-bottom-0 border-1 '>
            <SelectedDishesList />
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between bg-dark border border-danger border-1'>
            {selectedDishes.length > 0 && (
              <Button variant='secondary' onClick={() => dispatch(clearList())}>
                Clear
              </Button>
            )}
            <div className='d-flex gap-2'>
              {selectedDishes.length > 0 && (
                <Button variant='danger' onClick={handleClick}>
                  Go to pay
                </Button>
              )}
            </div>
            <Alert
              show={showAllert}
              variant='danger'
              className='info_alert d-flex justify-content-between mx-3 gap-2 py-2'
            >
              <span>
                The payment page is under development and is not yet available.
              </span>
              <CloseButton
                onClick={() => {
                  setShowAlert(false);
                }}
              />
            </Alert>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
