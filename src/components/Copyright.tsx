import { FC } from 'react';

export const Copyright: FC = () => {
  return (
    <div className="row bg-secondary text-white mt-3">
      <div className="text-center border-2 border-danger p-3">
        &copy; Copyright Restaurant "Starfish" 2022
      </div>

      <a href="/" className="btn btn-danger">
        <i className="bi bi-house-fill"></i>
      </a>
    </div>
  );
};
