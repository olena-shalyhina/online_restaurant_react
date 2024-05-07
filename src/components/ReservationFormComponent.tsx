import { FC } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface ReservationFormComponentProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReservationFormComponent: FC<ReservationFormComponentProps> = ({
  show,
  setShow,
}) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-danger">
          <Modal.Title>RESERV A TABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-warning">E-mail</Form.Label>
              <Form.Control
                className="form-control-sm"
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-warning">Name</Form.Label>
              <Form.Control
                className="form-control-sm"
                type="text"
                placeholder="Your name ..."
                required
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-warning">Phone</Form.Label>
              <Form.Control
                className="form-control-sm"
                type="phone"
                placeholder="+372"
                required
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-warning">People</Form.Label>
              <Form.Control
                className="form-control-sm"
                type="number"
                placeholder="2"
                required
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-warning">Time</Form.Label>
              <div className="mb-1 d-flex gap-3">
                <Form.Control
                  className="form-control-sm"
                  type="date"
                  required
                />
                <Form.Control
                  className="form-control-sm"
                  type="time"
                  required
                />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-1"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-warning">
                Additional information
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-secondary">
          <Button
            className="text-dark m-auto"
            variant="danger"
            type="submit"
            onClick={handleClose}
          >
            RESERVE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
