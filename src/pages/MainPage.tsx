import { FC } from 'react';
import { About } from '../components/About';
import { MainSlider } from '../components/MainSlider';

export const MainPage: FC = () => {
  return (
    <div className="row d-flex flex-column g-5 bg-secondary">
      <About />
      <MainSlider />
    </div>
  );
};
