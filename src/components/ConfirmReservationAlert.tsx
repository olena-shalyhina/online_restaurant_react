import { FC } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { IReservationFormFields } from '../types/types';

interface ConfirmReservationAlertProps {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  reservationData: IReservationFormFields;
}

export const ConfirmReservationAlert: FC<ConfirmReservationAlertProps> = ({
  setShowAlert,
  showAlert,
  handleClose,
  setShowModal,
  reservationData,
}) => {
  const { name, date, time, people, phone } = reservationData;

  return (
    <Alert show={showAlert} variant="danger">
      <Alert.Heading>Thank you! Check and confirm.</Alert.Heading>
      <p>
        <b>{name}</b>, you have a table reserved for:
        <br /> {date} at {time}.
        <br />
        Number of people: {people}
        <br />
        Your phone number: {phone}
      </p>
      <hr />
      <div className="d-flex justify-content-between">
        <Button
          onClick={() => {
            setShowAlert(false);
            handleClose();
            setShowModal(true);
          }}
          variant="secondary"
        >
          Сome back
        </Button>
        <Button
          onClick={() => {
            setShowAlert(false);
            handleClose();
          }}
          variant="danger"
        >
          Confirm
        </Button>
      </div>
    </Alert>
  );
};
