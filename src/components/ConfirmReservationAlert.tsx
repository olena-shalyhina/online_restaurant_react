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
          <Alert.Heading className='pb-3 text-light fs-5'>
            Reservation completed successfully!
          </Alert.Heading>
          <p className='text-light fs-6'>
            <span>
              <b>{name}</b>
              <br /> we will be glad to see you
            </span>
            <br />
            <span>
              <b>{date}</b> at <b>{time}</b>!
            </span>
          </p>
        </>
      ) : (
        <>
          <Alert.Heading className='pb-3 text-warning fs-6'>
            Thank you! Check and confirm.
          </Alert.Heading>
          <p className='py-2 fs-6 pb-3 text-light'>
            <b>{name}</b>, you have a table reserved for:
            <br /> <b>{date}</b> at <b>{time}</b>.
            <br />
            Number of people: <b>{people}</b>
            <br />
            Your phone number: <b>{phone}</b>
          </p>
          <hr className='text-danger' />
          <div className='d-flex justify-content-between'>
            <Button
              onClick={() => {
                setShowAlert(false);
                handleClose();
                setShowModal(true);
              }}
              variant='secondary'
              className='px-3'
            >
              GO BACK
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
                }, 5000);
              }}
              variant='danger'
              className='px-3'
            >
              CONFIRM
            </Button>
          </div>
        </>
      )}
    </Alert>
  );
};
