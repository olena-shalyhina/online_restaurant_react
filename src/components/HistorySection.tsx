import Starfish from '../assets/Starfish.png';

export const HistorySection = () => {
  return (
    <section className='my-4 my-lg-5'>
      <div className='position-relative p-2 p-lg-4 border border-danger rounded-4 bg-dark text-light shadow-lg'>
        <h2 className='text-danger text-center mb-3'>Our Story</h2>

        {/* Decorative line */}
        <div className='d-flex align-items-center justify-content-center my-3'>
          <div className='border-top border-danger w-25'></div>
          <img src={Starfish} className='mx-3' style={{ width: '22px' }} />
          <div className='border-top border-danger w-25'></div>
        </div>

        <p className='fs-6 fs-lg-5 fst-italic text-center px-2 px-lg-3'>
          Our restaurant began with a simple ambition: to bring together
          aesthetics, flavor, and atmosphere in a way that feels effortless yet
          unforgettable. We believe that food is more than a recipe — it is an
          experience shaped by aroma, texture, and the moment in which it is
          shared.
        </p>

        <p className='fs-6 fs-lg-5 fst-italic text-center px-2 px-lg-3'>
          From the very first day, our goal has been to craft dishes that linger
          in memory and create a space where guests feel both inspired and at
          ease. Today, our restaurant stands as a meeting point between
          tradition and modernity, where familiar flavors gain new depth and
          every visit becomes a small, meaningful journey.
        </p>
      </div>
    </section>
  );
};
