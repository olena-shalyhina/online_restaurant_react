import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/mainPage.scss';

export const MainSlider: FC = () => {
  return (
    <Carousel className="menu-container mb-5 px-0">
      <Carousel.Item interval={5000} className="carusel-item">
        <img
          src="..//..//src/assets/1630224720_1.jpg"
          className="carusel-img d-block m-auto w-100"
          alt="Meat dishes"
        />
        <Carousel.Caption>
          <h3 className="bg-dark opacity-75  w-100">MEAT DISHES</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} className="carusel-item">
        <img
          src="..//..//src/assets/1630219545_12.jpg"
          className=" carusel-img d-block w-100  m-auto "
          alt="Fish dishes"
        />
        <Carousel.Caption>
          <h3 className="bg-dark opacity-75 w-100">FISH DISHES</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carusel-item">
        <img
          src="..//..//src/assets/1630256733_17.jpg"
          className="carusel-img d-block m-auto w-100 "
          alt="Sushi and rolls"
        />
        <Carousel.Caption>
          <h3 className="bg-dark opacity-75 w-100">SUSHI AND ROLLS</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
