import { FC } from 'react';
import { About } from '../components/About';
import { MainSlider } from '../components/MainSlider';

export const MainPage: FC = () => {
  return (
    <div className="d-flex flex-column g-5">
      <About />
      <MainSlider />
    </div>
  );
};
