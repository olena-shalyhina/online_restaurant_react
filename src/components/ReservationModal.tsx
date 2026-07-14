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
      <Modal show={show} onHide={handleClose} className='mt-5'>
        <Modal.Header closeButton className='bg-danger border-bottom-0'>
          <Modal.Title className='fs-6'>RESERVE A TABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark border border-danger border-1 rounded-bottom-3'>
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
              setReservationData={setReservationData}
              setShowAlert={setShowAlert}
              reservationData={reservationData}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
