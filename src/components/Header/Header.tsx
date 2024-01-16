import { FC } from 'react';
import scss from './Header.module.scss';
import { HeaderNavbar } from './HeaderNavbar';

export const Header: FC = () => {
  return (
    <div className={scss.header_container}>
      <HeaderNavbar />
    </div>
  );
};
