import { FC } from 'react';

export const Copyright: FC = () => {
  // const url = import.meta.env.BASE_URL;
  return (
    <div className='row bg-dark text-white mt-3'>
      <div className='text-center border-2 border-danger p-3'>
        &copy; Copyright Restaurant "Coral & Flame" {new Date().getFullYear()}
      </div>
    </div>
  );
};
