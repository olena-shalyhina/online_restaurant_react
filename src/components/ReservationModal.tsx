import { FC } from 'react';

import Modal from 'react-bootstrap/Modal';
import { ReservationForm } from './ReservationForm';

interface ReservationModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReservationModal: FC<ReservationModalProps> = ({
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
          <ReservationForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer className="bg-secondary"></Modal.Footer>
      </Modal>
    </>
  );
};
