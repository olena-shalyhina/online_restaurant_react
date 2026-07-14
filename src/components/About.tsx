import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { SocialBar } from './common/SocialBar';
import '../styles/mainPage.scss';

export const About: FC = () => {
  return (
    <div id='about-section' className='mt-md-4'>
      <div className='text-animate text-center text-danger d-flex flex-column align-items-cener justify-content-center gap-5'>
        <SocialBar />
        <h1 className='px-3 bg-dark text-light w-100 opacity-75'>
          Flame. Sea. Flavor.
        </h1>
        <Button
          variant='danger'
          size='sm'
          href='tel:+37233344555'
          className='rounded-2 px-3 mb-3 py-1 text-light fs-5 d-flex align-items-center gap-2'
        >
          <i className='bi bi-phone'></i>
          (+372) 333-44-555
        </Button>
      </div>
    </div>
  );
};
