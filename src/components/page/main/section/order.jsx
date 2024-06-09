import OrderImg from "../../../../../public/order-img.png"
import OrderImgTwo from "../../../../../public/order-img-two.png"
const Orders = () => {
  return (
      <div className='orders'>
          <div className='orders__img'>
              <img src={OrderImg} alt='hello again' />
          </div>
          <div>
              <h3 className='orders__title'>Order Your Favourite Coffee</h3>
              <p className='orders__text'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="orders__btn">ORDER NOW</button>
          </div>
          <img src={OrderImgTwo} alt="Hello" className="orders__item"/>
      </div>
  );
}

export default Orders
