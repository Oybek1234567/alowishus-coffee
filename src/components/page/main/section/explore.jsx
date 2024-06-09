import { Info } from "../../../../assets/data";
import ExploreItem from "../../../../../public/explore-item.png";
const Explore = () => {
  return (
      <div className='explore'>
          <h2 className='explore__title'>Explore Our Alowishus</h2>
          <p className='explore__text'>
              A drink from the ‘My Alowishus’ bottled brews range OR grab one of
              our delicious coffee’s.
          </p>
          <div className="explore-item">
              <img src={ExploreItem} alt="hello" />
          </div>
          <div className='explore__items'>
              {Info.map((item) => (
                  <div key={item.id} className='explore__items_info'>
                      <b className='explore__items_info-title'>{item.title}</b>
                      <p className='explore__items_info-text'>{item.text}</p>
                      <div className='explore__items_info-img'>
                          {item.img}
                      </div>
                      <button className='explore__items_info-btn'>
                          {item.btn}
                      </button>
                  </div>
              ))}
          </div>
          
      </div>
  );
}

export default Explore
