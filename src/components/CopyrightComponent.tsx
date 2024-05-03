import { FC } from 'react';

export const CopyrightComponent: FC = () => {
  return (
    <div className="row bg-secondary text-white">
      <div className="text-center border-2 border-danger p-1">
        &copy; Copyright Restaurant "Starfish" 2022
      </div>

      <a href="/" className="btn btn-home btn-danger btn-sm m-0">
        <i className="bi bi-house-fill"></i>
      </a>
    </div>
  );
};
