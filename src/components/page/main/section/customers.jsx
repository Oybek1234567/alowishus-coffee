import { Icons } from "../../../../assets/icons";
import CustomersImg from "../../../../../public/customers-img.png";
import CustomersImgTwo from "../../../../../public/customers-img-two.png";
import CustomersItem from "../../../../../public/customers-item.png";
import CustomersItemTwo from "../../../../../public/customers-item-two.png";
const Customers = () => {
    return (
        <div className='customers'>
            <div className='customers__items'>
                <img src={CustomersImg} alt='customers-img' />
                <div className='customers__items_card'>
                    <img
                        src={CustomersImgTwo}
                        alt='hello'
                        className='customers__items_card_img'
                    />

                    <p className='customers__items_card_name'>Imam White</p>
                    <Icons.fillStars className='customers__items_card_stars' />

                    <p className='customers__items_card_text'>
                        “Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia”
                    </p>
                </div>
            </div>
            <div>
                <h3 className='customers__title'>What Our Customers Say</h3>
                <span className='customers__rate'>4.9</span>
                <Icons.fillStars className='customers__stars' /> <br />
                <span className='customers__base'>based on 2452+ reviews</span>
                <br />
                <button className='customers__btn'>
                    <Icons.leftArrow />
                </button>
                <button className='customers__btn_two'>
                    <Icons.rightArrow />
                </button>
            </div>
            <img src={CustomersItem} alt='hello' className="customers__item"/>
            <img src={CustomersItemTwo} alt='hello' className="customers__item_two"/>
        </div>
    );
};

export default Customers;
