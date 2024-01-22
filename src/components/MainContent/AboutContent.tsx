import { FC } from 'react';

export const AboutContent: FC = () => {
  return (
    <div
      id="about-section"
      className="row d-flex align-items-center p-2  bg-dark bg-opacity-75"
    >
      <div className="col-sm-12 col-md-6">
        <img
          src="src/assets/1655680286_59.jpg"
          className="img-fluid  my-3 bg-light rounded "
          alt="Photo restaurant"
        ></img>
      </div>
      <div className="col-sm-12 col-md-6 text-center p-2  fst-italic text-white fw-light fs-4 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officiis
        eos sed molestias! Repudiandae vo luptas molestiae eaque officia omnis
        et assumenda eligendi quidem quaerat, voluptate eos reiciendis. Odio,
        suscipit sit!
      </div>
    </div>
  );
};
