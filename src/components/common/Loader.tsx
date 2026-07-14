import logoImage from '../../assets/Starfish.png';
import '../../styles/loader.scss';

export const Loader = () => {
  return (
    <div className='loader-overlay d-flex flex-column gap-5 '>
      <img src={logoImage} className='loader-star' alt='loading' />
      <span className='loader-text  p-4'>Loading...</span>
    </div>
  );
};
