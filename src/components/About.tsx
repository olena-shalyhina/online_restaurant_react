import { FC } from 'react';
import '../styles/mainPage.scss';
import { Button } from 'react-bootstrap';

import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Telegram from '../assets/icons/telegram.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';

export const About: FC = () => {
  return (
    <div id="about-section" className="px-0 mx-0">
      <div
        className="text-animate text-center text-danger d-flex flex-column align-items-cener justify-content-around
      "
      >
        <div className="social  d-flex  justify-content-center gap-3">
          <Button variant="danger" size="sm">
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Instagram}
                alt="instagram icon"
              ></img>
            </a>
          </Button>
          <Button variant="danger" size="sm">
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Telegram}
                alt="telegram icon"
              ></img>
            </a>
          </Button>
          <Button variant="danger" size="sm">
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Whatsapp}
                alt="whatsapp icon"
              ></img>
            </a>
          </Button>
          <Button variant="danger" size="sm">
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Facebook}
                alt="facebook icon"
              ></img>
            </a>
          </Button>
        </div>
        <div>Lorem ipsum dolor!</div>
        <Button variant="danger" size="lg" href="tel:+37233344555">
          <i className="bi bi-phone"></i> (+372) 333-44-555
        </Button>
      </div>
    </div>
  );
};
