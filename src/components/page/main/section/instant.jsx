import InstantImg from "../../../../../public/instant-img.png";
import InstantLine from "../../../../../public/instant-line.png";
import InstantItem from "../../../../../public/instant-item.png";
const Instant = () => {
  return (
      <div className='instant'>
          <div>
              <h3 className='instant__title'>Instant Coffee At Your Home</h3>
              <p className='instant__text'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.{" "}
              </p>
              <button className='instant__btn'>DOWNLOAD YOUR APP</button>
          </div>
          <div>
              <img
                  src={InstantLine}
                  alt='instant-line'
                  className='instant__line'
              />
              <img
                  src={InstantImg}
                  alt='instant-img'
                  className='instant__img'
              />
          </div>
          <img
              src={InstantItem}
              alt='instant-item'
              className='instant__item'
          />
      </div>
  );
}

export default Instant
