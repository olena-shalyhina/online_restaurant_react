import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { SocialBar } from './common/SocialBar';

export const Footer: FC = () => {
  return (
    <div className='row d-flex align-items-stretch justify-content-around gap-3 gap-lg-5 mx-0 my-lg-3 bg-dark text-white w-100'>
      <div
        id='hours'
        className='d-flex flex-column col-12 col-sm-5 col-lg-3 text-center border rounded-4 border-1 border-danger p-3 gap-2 pb-4'
      >
        <p className='text-danger fw-bold'>HOURS</p>
        <p className='mb-1'>
          <span className='text-danger fw-semibold'>Sun–Thu:</span> 11:00 –
          22:00
        </p>
        <p className='mb-1'>
          <span className='text-danger fw-semibold'>Fri:</span> 11:00 – 14:00
        </p>
        <p className='mb-1'>
          <span className='text-danger fw-semibold'>Saturday:</span> Closed
        </p>
        <p className='d-sm-none'></p>
      </div>
      <div
        id='address'
        className='col-12 col-sm-5 col-lg-3  text-center  border rounded-4 border-1 border-danger p-3'
      >
        <p className='text-danger fw-bold'>ADDRESS</p>
        10152 Tallinn Raua tn 628
        <p className='text-warning fs-5 pt-3'>* 24/7 free food delivery</p>
        <Button variant='danger' className='p-2 px-3' href='tel:+37233344555'>
          <i className='bi bi-phone pe-2'></i> (+372) 333-44-555
        </Button>
      </div>
      <div
        id='testimonials'
        className=' col-sm-11 col-lg-3 border rounded-4 border-1 border-danger p-3'
      >
        <div className='text-center'>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <p>
            "The best restaurant I've been to! And that's saying a lot, since
            I've been to many!"
          </p>
        </div>
        <div className='text-center'>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-fill text-danger p-1'></i>
          <i className='bi bi-star-half text-danger p-1'></i>
          <p>
            "Amazing food! Great service! Couldn't ask for more! I'll be back
            again and again!"
          </p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
};
