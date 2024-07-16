import { FC, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { ReservationForm } from './ReservationForm';
import { ConfirmReservationAlert } from './ConfirmReservationAlert';
import { IReservationFormFields } from '../types/types';

interface ReservationModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReservationModal: FC<ReservationModalProps> = ({
  show,
  setShow,
}) => {
  const [reservationData, setReservationData] =
    useState<IReservationFormFields>({
      email: '',
      name: '',
      phone: '',
      people: 2,
      date: '',
      time: '',
      textarea: '',
    });
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton className="bg-danger">
          <Modal.Title>RESERV A TABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          {showAlert ? (
            <ConfirmReservationAlert
              showAlert={showAlert}
              setShowAlert={setShowAlert}
              handleClose={handleClose}
              setShowModal={setShow}
              reservationData={reservationData}
              setReservationData={setReservationData}
            />
          ) : (
            <ReservationForm
              handleClose={handleClose}
              setReservationData={setReservationData}
              setShowAlert={setShowAlert}
              reservationData={reservationData}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="bg-secondary"></Modal.Footer>
      </Modal>
    </>
  );
};
