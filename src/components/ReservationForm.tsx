import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from '../validation.ts';

import { IReservationFormFields } from '../types/types';

interface ReservationFormProps {
  handleClose: () => void | undefined;
}

export const ReservationForm: FC<ReservationFormProps> = ({ handleClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IReservationFormFields>({
    mode: 'onChange',
  });

  console.log(errors);

  const onSubmit: SubmitHandler<IReservationFormFields> = (data) => {
    alert(JSON.stringify(data));
    reset();
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-warning">E-mail</Form.Label>
        <Form.Control
          className="form-control-sm"
          type="email"
          placeholder="name@example.com"
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
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
        <Form.Label className="text-warning">Name</Form.Label>
        <Form.Control
          className="form-control-sm"
          type="text"
          placeholder="Name"
          {...register('name', {
            required: 'Name is required field',
            pattern: {
              value: nameValidation,
              message: 'Please enter a name of 2-30 characters, letters only',
            },
          })}
        />
        {errors.name && (
          <Form.Text className="text-danger">{errors.name.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
        <Form.Label className="text-warning">Phone</Form.Label>
        <Form.Control
          className="form-control-sm"
          type="tel"
          placeholder="+372 00000000"
          {...register('phone', {
            required: 'Phone is required field',
            pattern: {
              value: phoneValidation,
              message: 'Please enter phone namber (+372 00000000)',
            },
          })}
        />
        {errors.phone && (
          <Form.Text className="text-danger">{errors.phone.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput4">
        <Form.Label className="text-warning">People</Form.Label>
        <Form.Control
          className="form-control-sm"
          type="number"
          placeholder="2"
          min={1}
          max={20}
          {...register('people', {
            required: 'Select number of people (1-20)',
          })}
        />
        {errors.people && (
          <Form.Text className="text-danger">{errors.people.message}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
        <Form.Label className="text-warning">Time</Form.Label>
        <div className="mb-2 d-flex justify-content-between gap-3">
          <div className="d-flex flex-column align-items-stretch w-100">
            <Form.Control
              className="form-control-sm"
              type="date"
              {...register('date', {
                required: 'Select date',
              })}
            />
            {errors.date && (
              <Form.Text className="text-danger">
                {errors.date.message}
              </Form.Text>
            )}
          </div>

          <div className="d-flex flex-column align-items-stretch w-100">
            <Form.Control
              className="form-control-sm"
              type="time"
              {...register('time', {
                required: 'Select time',
              })}
            />
            {errors.time && (
              <Form.Text className="text-danger">
                {errors.time.message}
              </Form.Text>
            )}
          </div>
        </div>
      </Form.Group>

      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-warning">Additional information</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button
        className="text-dark mt-3 mb-1 w-100"
        variant="danger"
        type="submit"
      >
        RESERVE
      </Button>
    </Form>
  );
};
