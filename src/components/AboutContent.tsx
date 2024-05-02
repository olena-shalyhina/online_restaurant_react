import { FC } from 'react';

export const AboutContent: FC = () => {
  return (
    <div
      id="about-section"
      className="row d-flex align-items-center bg-danger mb-5"
    >
      <div className="col-sm-12 col-lg-8">
        <img
          src="src/assets/1655680286_59.jpg"
          className="img-fluid  my-3 bg-light rounded "
          alt="Photo restaurant"
        ></img>
      </div>
      <div className="col-sm-12 col-lg-4 text-center p-3 fst-italic text-dark  fs-5 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officiis
        eos sed molestias! Repudiandae vo luptas molestiae eaque officia omnis
        et assumenda eligendi quidem quaerat, voluptate eos reiciendis. Odio,
        suscipit sit! Repudiandae vo luptas molestiae eaque officia omnis et
        assumenda eligendi quidem quaerat, voluptate eos reiciendis. Odio,
        suscipit sit!
      </div>
    </div>
  );
};
