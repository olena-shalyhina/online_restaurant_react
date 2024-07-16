import { FC } from 'react';

import ReactPlayer from 'react-player';
// import video from '../assets/124830-732633115_small.mp4';
import video from '../assets/8922353-hd_2048_1080_25fps.mp4';

import { Button } from 'react-bootstrap';
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Telegram from '../assets/icons/telegram.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';
export const ContactsPage: FC = () => {
  return (
    <div className="row ">
      <video
        src={video}
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        object-fit="cover"
      ></video>
      <div className="col-sm-12  col-md-8 bg-secondary  justify-content-center ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.6504541433724!2d24.766426749512696!3d59.43598939866435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293595ccf02c1%3A0x4566068c897610ff!2z0KDQsNGD0LAsINCi0LDQu9C70LjQvQ!5e0!3m2!1sru!2see!4v1721038610331!5m2!1sru!2see"
          width="100%"
          height="420px"
          loading="lazy"
          className="py-3"
        ></iframe>
        {/* <ReactPlayer
          url={video}
          width="100%"
          height="420px"
          autoPlay={true}
          // plaing
          controls={true}
          volume={1}
          loop={true}
          ratio={16 / 9}
        /> */}
      </div>

      <div
        className="col-sm-12 col-md-4  bg-secondary d-flex flex-column align-items-center
       p-3 "
      >
        <div>
          <div id="hours" className=" text-center  ">
            <p className="text-danger p-1 fw-bold">HOURS</p>
            <p>Sun-Thurs: 11:15am - 10:00pm</p>
            <p>Fri: 11:15am - 2:30pm</p>
            <p>Saturday Closed</p>
          </div>

          <div id="address" className=" text-center pb-3">
            <p className="text-danger p-2 fw-bold">ADDRESS</p>
            10152 Tallinn Raua tn 628
            <p className="text-warning">* 24/7 free food delivery</p>
            <Button variant="outline-warning" href="tel:+37233344555">
              <i className="bi bi-phone"></i> (+372) 333-44-555
            </Button>
          </div>

          <div className="social p-3 d-flex  justify-content-between">
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Instagram}
                alt="instagram icon"
              ></img>
            </a>
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Telegram}
                alt="telegram icon"
              ></img>
            </a>
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Whatsapp}
                alt="whatsapp icon"
              ></img>
            </a>
            <a className="social__link" href="#">
              <img
                className="social__img"
                src={Facebook}
                alt="facebook icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
