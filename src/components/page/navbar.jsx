import { Icons } from "../../assets/icons";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="/">
            <Icons.logo />
            </a>
            <div className='navbar_points'>
                <a href='#' className='navbar_points-item'>
                    Cafe Menu
                </a>

                <a href='#' className='navbar_points-item'>
                    About Us
                </a>

                <a href='#' className='navbar_points-item'>
                    Find Us
                </a>

                <a href='#' className='navbar_points-item'>
                    Alowishus Catering
                </a>
            </div>
            <span className='navbar_about'>
                <Icons.vector />
            </span>
            <button className='navbar_btn'>Buy gift vouchers</button>
        </nav>
    );
};

export default Navbar;
