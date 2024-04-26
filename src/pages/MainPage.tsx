import { FC } from 'react';
import { AboutContent } from '../components/MainContent/AboutContent';
import { MenuSlider } from '../components/MainContent/MenuSlider';

export const MainPage: FC = () => {
  return (
    <div className="d-flex flex-column justify-content-between g-5">
      <AboutContent />
      <MenuSlider />
    </div>
  );
};
