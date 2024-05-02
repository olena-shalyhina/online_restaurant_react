import { FC } from 'react';
import { AboutContent } from '../components/AboutContent';
import { MenuSlider } from '../components/MenuSlider';

export const MainPage: FC = () => {
  return (
    <div className="d-flex flex-column  g-5">
      <AboutContent />
      <MenuSlider />
    </div>
  );
};
