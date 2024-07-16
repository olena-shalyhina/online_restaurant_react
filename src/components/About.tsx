import { FC } from 'react';
import '../styles/mainPage.scss';
import { Container } from 'react-bootstrap';

export const About: FC = () => {
  return (
    <Container id="about-section" className="bg-secondary mt-5 px-0">
      <p className="text-animate text-center text-white   px-5 py-3 ">
        Lorem ipsum dolor!
        <br />
        Sit amet consectetur, adipisicing elit. Alias officiis eos sed
        molestias! Repudiandae vo luptas molestiae eaque officia omnis et
        assumenda eligendi quidem quaerat, voluptate eos reiciendis. Odio,
        suscipit sit! Repudiandae vo luptas molestiae eaque officia omnis et
        assumenda eligendi quidem quaerat, reiciendis. Sit amet consectetur,
        adipisicing elit.
      </p>
    </Container>
  );
};
