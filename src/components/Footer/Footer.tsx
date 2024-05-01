import { FC } from 'react';
import { Button } from 'react-bootstrap';

export const Footer: FC = () => {
  return (
    <div className="row bg-secondary text-white">
      <div
        id="hours"
        className="col-sm-4 text-center  border-2 border-danger border-end"
      >
        <p className="text-danger p-3 fw-bold">HOURS</p>
        <p>Sun-Thurs: 11:15am - 10:00pm</p>
        <p>Fri: 11:15am - 2:30pm</p>
        <p>Saturday Closed</p>
        <p className="d-sm-none"></p>
      </div>
      <div
        id="address"
        className="col-sm-4 text-center border-2 border-danger border-end"
      >
        <p className="text-danger py-3 fw-bold">ADDRESS</p>
        10152 Tallinn Raua tn 628
        <p className="text-warning">* 24/7 free food delivery</p>
        <Button variant="outline-warning" href="tel:+37233344555">
          <i className="bi bi-phone"></i> (+372) 333-44-555
        </Button>
        <p className="d-sm-none"></p>
      </div>
      <div id="testimonials" className="col-sm-4">
        <div className="text-center m-3">
          <p>
            "The best restaurant I've been to! And that's saying a lot, since
            I've been to many!"
          </p>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
        </div>
        <div className="text-center m-3">
          <p>
            "Amazing food! Great service! Couldn't ask for more! I'll be back
            again and again!"
          </p>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-fill text-warning p-1"></i>
          <i className="bi bi-star-half text-warning p-1"></i>
        </div>
      </div>
      <div className="text-center border-2 border-danger border-top p-2">
        &copy; Copyright Restaurant "Starfish" 2022
      </div>
      <a href="/" className="btn btn-home btn-danger btn-sm">
        <i className="bi bi-house-fill"></i>
      </a>
    </div>
  );
};
