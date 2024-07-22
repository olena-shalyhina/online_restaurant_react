import { FC, lazy } from 'react';

import video from '../assets/124830-732633115_small.mp4';
import '../styles/contactsPage.scss';
// import video from '../assets/8922353-hd_2048_1080_25fps.mp4';

export const ContactsPage: FC = () => {
  return (
    <div className="contacts bg-secondary row gap-3  mb-3">
      <video
        src={video}
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        object-fit="cover"
      ></video>
      <iframe
        className="map bg-secondary"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.6504541433724!2d24.766426749512696!3d59.43598939866435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293595ccf02c1%3A0x4566068c897610ff!2z0KDQsNGD0LAsINCi0LDQu9C70LjQvQ!5e0!3m2!1sru!2see!4v1721038610331!5m2!1sru!2see"
        width="100%"
        height="280px"
        loading="lazy"
      ></iframe>
    </div>
  );
};
