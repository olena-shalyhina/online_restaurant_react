import { FC } from 'react';
import { About } from '../components/About';
import { MainSlider } from '../components/MainSlider';
import { HistorySection } from '../components/HistorySection';

export const MainPage: FC = () => {
  return (
    <div className='d-flex flex-column align-items-cener gap-lg-3 my-2 my-lg-4'>
      <About />
      <HistorySection />
      <MainSlider />
    </div>
  );
};
