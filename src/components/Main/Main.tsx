import { FC } from 'react';

import { AboutContent } from './AboutContent';
import { MenuSlider } from './MenuSlider';

export const Main: FC = () => {
  return (
    <div>
      <AboutContent />;
      <MenuSlider />
    </div>
  );
};
