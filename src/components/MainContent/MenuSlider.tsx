import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/mainPage.scss';

export const MenuSlider: FC = () => {
  return (
    <div className="menu-container row mb-5 ">
      <Carousel className=" text-center m-auto">
        <Carousel.Item interval={5000}>
          <img
            src="..//..//src/assets/1630224720_1.jpg"
            className="d-block w-75 m-auto py-5"
            alt="Meat dishes"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75  w-50">MEAT DISHES</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            src="..//..//src/assets/1630219545_12.jpg"
            className="d-block w-75 m-auto py-5"
            alt="Fish dishes"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75 w-50">FISH DISHES</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="..//..//src/assets/1630256733_17.jpg"
            className="d-block w-75 m-auto py-5"
            alt="Sushi and rolls"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75 w-50">SUSHI AND ROLLS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
