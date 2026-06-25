import { FC } from 'react';
import '../styles/mainPage.scss';
import { Button } from 'react-bootstrap';
import { SocialBar } from './common/SocialBar';

export const About: FC = () => {
  return (
    <div id='about-section' className='px-0 mx-0'>
      <div
        className='text-animate text-center text-danger d-flex flex-column align-items-cener justify-content-around
      '
      >
        <SocialBar />
        <h1 className='px-3 fw-bold bg-light text-danger rounded-3 p-1 mx-3 opacity-75'>
          Flame. Sea. Flavor.
        </h1>
        <Button
          variant='danger'
          size='sm'
          href='tel:+37233344555'
          className='rounded-2 px-3 py-2 text-light fs-5 d-flex align-items-center gap-2'
        >
          <i className='bi bi-phone'></i>
          (+372) 333-44-555
        </Button>
      </div>
    </div>
  );
};
