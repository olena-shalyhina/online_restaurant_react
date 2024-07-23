import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SelectedDishesList } from './SelectedDihesList';

export const Cart: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <Button variant="danger" onClick={toggleShow} className="me-2">
        <i className="bi bi-cart-check-fill fs-5"></i>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        variant="dark"
        className="bg-secondary"
      >
        <Offcanvas.Header closeButton className="bg-danger">
          <Offcanvas.Title className="bg-danger">YOUR ORDERS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SelectedDishesList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
