import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from '../utils/validateFormValues.ts';

import { IReservationFormFields } from '../types/types';

interface ReservationFormProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  reservationData: IReservationFormFields;
  setReservationData: React.Dispatch<
    React.SetStateAction<IReservationFormFields>
  >;
}

export const ReservationForm: FC<ReservationFormProps> = ({
  setShowAlert,
  setReservationData,
  reservationData,
}) => {
  console.log(reservationData);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IReservationFormFields>({
    mode: 'onChange',
    defaultValues: reservationData,
  });

  console.log(errors);

  const onSubmit: SubmitHandler<IReservationFormFields> = (data) => {
    setReservationData(data);
    setShowAlert(true);
  };

  return (
    <Form id='hook-form' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-2' controlId='exampleForm.ControlInput1'>
        <Form.Label className='text-light'>
          E-mail <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control
          className='form-control-sm'
          type='email'
          placeholder='name@example.com'
          autoFocus
          {...register('email', {
            required: 'Email is required field',
            pattern: {
              value: emailValidation,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && (
          <Form.Text className='text-danger'>{errors.email.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className='mb-2' controlId='exampleForm.ControlInput2'>
        <Form.Label className='text-light'>
          Name <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control
          className='form-control-sm'
          type='text'
          placeholder='Name'
          {...register('name', {
            required: 'Name is required field',
            pattern: {
              value: nameValidation,
              message: 'Please enter a name of 2-30 characters, letters only',
            },
          })}
        />
        {errors.name && (
          <Form.Text className='text-danger'>{errors.name.message}</Form.Text>
        )}
      </Form.Group>
      <div className='d-flex justify-content-between gap-3'>
        <Form.Group className='mb-2 w-50' controlId='exampleForm.ControlInput3'>
          <Form.Label className='text-light'>
            Phone <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control
            className='form-control-sm'
            type='tel'
            placeholder='+37200000000'
            {...register('phone', {
              required: 'Phone is required field',
              pattern: {
                value: phoneValidation,
                message: 'Please enter phone namber (+37200000000)',
              },
            })}
          />
          {errors.phone && (
            <Form.Text className='text-danger'>
              {errors.phone.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className='mb-2 w-50' controlId='exampleForm.ControlInput4'>
          <Form.Label className='text-light'>
            People <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control
            className='form-control-sm'
            type='number'
            placeholder='2'
            min={1}
            max={20}
            {...register('people', {
              required: 'Select number of people (1-20)',
            })}
          />
          {errors.people && (
            <Form.Text className='text-danger'>
              {errors.people.message}
            </Form.Text>
          )}
        </Form.Group>
      </div>
      <Form.Group className='mb-2' controlId='exampleForm.ControlInput5'>
        <div className='d-flex justify-content-between gap-3'>
          {/* DATE */}
          <div className='d-flex flex-column w-100'>
            <Form.Label className='text-light'>
              Date <span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              className='form-control-sm'
              type='date'
              {...register('date', {
                required: 'Select date',
              })}
            />
            {errors.date && (
              <Form.Text className='text-danger'>
                {errors.date.message}
              </Form.Text>
            )}
          </div>

          {/* TIME */}
          <div className='d-flex flex-column w-100'>
            <Form.Label className='text-light'>
              Time <span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              className='form-control-sm'
              type='time'
              {...register('time', {
                required: 'Select time',
              })}
            />
            {errors.time && (
              <Form.Text className='text-danger'>
                {errors.time.message}
              </Form.Text>
            )}
          </div>
        </div>
      </Form.Group>

      <Form.Group className='mb-2' controlId='exampleForm.ControlTextarea1'>
        <Form.Label className='text-light'>Additional information</Form.Label>
        <Form.Control as='textarea' rows={2} />
      </Form.Group>
      <div className='d-flex justify-content-end'>
        <Button
          className='text-light mt-3 px-3 mb-1 '
          variant='danger'
          type='submit'
          disabled={!isValid}
        >
          RESERVE
        </Button>
      </div>
    </Form>
  );
};
