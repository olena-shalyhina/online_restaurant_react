import { FC, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { IReservationFormFields } from '../types/types';

interface ConfirmReservationAlertProps {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  reservationData: IReservationFormFields;
  setReservationData: React.Dispatch<
    React.SetStateAction<IReservationFormFields>
  >;
}

export const ConfirmReservationAlert: FC<ConfirmReservationAlertProps> = ({
  showAlert,
  setShowAlert,
  handleClose,
  setShowModal,
  reservationData,
  setReservationData,
}) => {
  console.log(reservationData);
  const { name, date, time, people, phone } = reservationData;
  const [reserved, setReserved] = useState<boolean>(false);

  return (
    <Alert
      show={showAlert}
      variant='text-light'
      className='bg-dark text-center mb-0 text-light'
    >
      {reserved ? (
        <>
          <Alert.Heading className='pb-3 text-success fs-6'>
            Reservation completed successfully!
          </Alert.Heading>
          <p className='text-light'>
            <span>{name}, we will be glad to see you</span>
            <br />
            <span>
              {date} at {time}!
            </span>
          </p>
        </>
      ) : (
        <>
          <Alert.Heading className='pb-3 text-warning fs-6'>
            Thank you! Check and confirm.
          </Alert.Heading>
          <p className='pb-3'>
            <b>{name}</b>, you have a table reserved for:
            <br /> {date} at {time}.
            <br />
            Number of people: {people}
            <br />
            Your phone number: {phone}
          </p>
          <hr />
          <div className='d-flex justify-content-between'>
            <Button
              onClick={() => {
                setShowAlert(false);
                handleClose();
                setShowModal(true);
              }}
              variant='secondary'
              className='w-25'
            >
              Сome back
            </Button>
            <Button
              onClick={() => {
                setReserved(true);
                setTimeout(() => {
                  setShowAlert(false);
                  handleClose();
                  setShowModal(false);
                  setReservationData({
                    email: '',
                    name: '',
                    phone: '',
                    people: 2,
                    date: '',
                    time: '',
                    textarea: '',
                  });
                }, 3000);
              }}
              variant='danger'
              className='w-25'
            >
              Confirm
            </Button>
          </div>
        </>
      )}
    </Alert>
  );
};
