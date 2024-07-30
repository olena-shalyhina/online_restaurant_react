import { FC } from 'react';
import { Button } from 'react-bootstrap';

import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Telegram from '../assets/icons/telegram.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';

export const Footer: FC = () => {
  return (
    <div className="row d-flex bg-secondary text-white">
      <div id="hours" className="col-lg-4 col-md-6 text-center">
        <p className="text-danger p-3 fw-bold  fs-5">HOURS</p>
        <p>Sun-Thurs: 11:15am - 10:00pm</p>
        <p>Fri: 11:15am - 2:30pm</p>
        <p>Saturday Closed</p>
        <p className="d-sm-none"></p>
      </div>
      <div id="address" className="col-lg-4 col-md-6 text-center">
        <p className="text-danger py-3 fw-bold fs-5">ADDRESS</p>
        10152 Tallinn Raua tn 628
        <p className="text-danger">* 24/7 free food delivery</p>
        <Button variant="danger" href="tel:+37233344555">
          <i className="bi bi-phone"></i> (+372) 333-44-555
        </Button>
      </div>

      <div id="testimonials" className="col-lg-4 col-md-12">
        <div className="text-center m-3">
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <p>
            "The best restaurant I've been to! And that's saying a lot, since
            I've been to many!"
          </p>
        </div>
        <div className="text-center m-3">
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-fill text-danger p-1"></i>
          <i className="bi bi-star-half text-danger p-1"></i>
          <p>
            "Amazing food! Great service! Couldn't ask for more! I'll be back
            again and again!"
          </p>
        </div>
      </div>
      <div className="social col-sm-12 mt-5 d-flex  justify-content-center gap-3">
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
    </div>
  );
};
