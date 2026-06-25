import { FC } from 'react';
import '../../styles/mainPage.scss';
import { Button } from 'react-bootstrap';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Telegram from '../../assets/icons/telegram.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';

export const SocialBar: FC = () => {
  return (
    <div className='social d-flex justify-content-center gap-4 mt-3'>
      <Button variant='danger' size='sm' className='rounded-2 p-2'>
        <a className='social__link' href='#'>
          <img className='social__img' src={Instagram} alt='instagram icon' />
        </a>
      </Button>

      <Button variant='danger' size='sm' className='rounded-2 p-2'>
        <a className='social__link' href='#'>
          <img className='social__img' src={Telegram} alt='telegram icon' />
        </a>
      </Button>

      <Button variant='danger' size='sm' className='rounded-2 p-2'>
        <a className='social__link' href='#'>
          <img className='social__img' src={Whatsapp} alt='whatsapp icon' />
        </a>
      </Button>

      <Button variant='danger' size='sm' className='rounded-2 p-2'>
        <a className='social__link' href='#'>
          <img className='social__img' src={Facebook} alt='facebook icon' />
        </a>
      </Button>
    </div>
  );
};
