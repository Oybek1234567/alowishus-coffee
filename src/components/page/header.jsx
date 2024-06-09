import Cafe from "../../../public/cafe.png";
import CoffeImg from "../../../public/alowishus-coffee.png";
import Circle from "../../../public/circle.png";
import Coffee from "../../../public/coffee.png";
import { Icons } from "../../assets/icons";
const Header = () => {
    return (
        <div className='header'>
            <div className='header-menu'>
                <h1 className='header-menu_title'>
                    Alowishus delicious coffee
                    <span>
                        <img src={Cafe} alt='coffee of the year' />
                    </span>
                </h1>

                <p className='header-menu_text'>
                    A drink from the ‘My Alowishus’ bottled brews range OR grab
                    one of our delicious coffee’s.
                </p>
                <button className='header-menu_btn'>DOWNLOAD APP</button>
                <a href='#' className='header-menu_item'>
                    SHOP COFFEE
                </a>
            </div>
            <div className='header-image'>
                <img src={CoffeImg} alt='Alowishus coffee' />
            </div>
            <img src={Coffee} alt='coffee' className='header-coffee' />
            <img src={Circle} alt='circle' className='header-circle' />
            <div className='header-card'>
                <ul>
                    <li>
                        <Icons.stars />
                    </li>
                    <li>
                        <Icons.stars />
                    </li>
                    <li>
                        <Icons.stars />
                    </li>
                    <li>
                        <Icons.stars />
                    </li>
                    <li>
                        <Icons.stars />
                    </li>
                </ul>
                <p className="header-card_text">4.9 out of 5 Overall Star Rating for All Local Business.</p>
            </div>
        </div>
    );
};

export default Header;
