import { FC } from 'react';
import { AboutComponent } from '../components/AboutComponent';
import { MenuSliderComponent } from '../components/MenuSliderComponent';

export const MainPage: FC = () => {
  return (
    <div className="d-flex flex-column g-5">
      <AboutComponent />
      <MenuSliderComponent />
    </div>
  );
};
