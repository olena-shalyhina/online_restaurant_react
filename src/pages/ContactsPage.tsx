import { FC } from 'react';

import { Button } from 'react-bootstrap';

export const ContactsPage: FC = () => {
  return (
    <div className="row col-sm-12 m-0 ">
      <div className="col-sm-8 bg-secondary  justify-content-center ">
        <iframe
          className="p-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16222.906214446677!2d24.69979233743312!3d59.452031158536485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293480047e735%3A0xc2160e3032b95a4f!2zw5xsbw!5e0!3m2!1sru!2see!4v1714657727481!5m2!1sru!2see"
          width="840"
          height="600"
          loading="lazy"
        ></iframe>
      </div>

      <div className="col-sm-4  bg-secondary d-flex flex-column p-5 border-2 border-danger border-start">
        <div id="hours" className=" text-center  pb-5">
          <p className="text-danger p-3 fw-bold">HOURS</p>
          <p>Sun-Thurs: 11:15am - 10:00pm</p>
          <p>Fri: 11:15am - 2:30pm</p>
          <p>Saturday Closed</p>
          <p className="d-sm-none"></p>
        </div>

        <div id="address" className=" text-center">
          <p className="text-danger py-3 fw-bold">ADDRESS</p>
          10152 Tallinn Raua tn 628
          <p className="text-warning">* 24/7 free food delivery</p>
          <Button variant="outline-warning" href="tel:+37233344555">
            <i className="bi bi-phone"></i> (+372) 333-44-555
          </Button>
          <p className="d-sm-none"></p>
        </div>
      </div>
    </div>
  );
};
