import { FC } from 'react';
import { About } from '../components/About';
import { MainSlider } from '../components/MainSlider';

export const MainPage: FC = () => {
  return (
    <div className="d-flex flex-column align-items-cener gap-5 ">
      <About />
      <MainSlider />
    </div>
  );
};
