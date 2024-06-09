import FooterLogo from "../../../public/footer-logo.png";
import { Icons } from "../../assets/icons";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <img src={FooterLogo} alt='footer-logo' />
                <p className='footer-info_text'>
                    We made it our mission to create community everyday and grow
                    meaningful, lasting relationships with our staff, our
                    suppliers and of course you, our customers.
                </p>
            </div>

            <div className='footer-contact'>
                <h2 className='footer-contact_title'> Contact Alowishus!</h2>
                <div className='footer-contact-mail'>
                    <button className='footer-contact_mail-btn'>
                        <Icons.email />
                    </button>
                    <span className='footer-contact_mail-text'>
                        alowishus@gmail.com
                    </span>
                </div>
                <div className='footer-contact_call'>
                    <button className='footer-contact_call-btn'>
                        <Icons.call />
                    </button>
                    <span className='footer-contact_call-text'>
                        +110 214 214 2451
                    </span>
                </div>
                <div className='footer-contact_network'>
                    <button className='footer-contact_network-facebook'>
                        <Icons.facebook />
                    </button>
                    <button className='footer-contact_network-instagram'>
                        <Icons.instagram />
                    </button>
                    <button className='footer-contact_network-twitter'>
                        <Icons.twitter />
                    </button>
                    <button className='footer-contact_network-linkedin'>
                        <Icons.linkedin />
                    </button>
                </div>
            </div>
            <div className='footer-location'>
                <h2 className='footer-location_title'>Store Locations</h2>
                <p className='footer-location_text'>
                    Find your nearest Alowishus store with opening hours,
                    location and contact details.
                </p>
                <a href='#' className='footer-location_find'>
                    Find my alowishus{" "}
                    <span>
                        <Icons.arrow />
                    </span>
                </a>
            </div>
            <div className='footer-sub'>
                <h3 className='footer-sub_title'>First one on us!</h3>
                <input
                    type='email'
                    placeholder='E-mail'
                    className='footer-sub_input'
                />
                <br />
                <button className='footer-sub_btn'>Subscribe</button>
            </div>
            <hr className='footer-line' />
            <div className='footer-end'>
                <p>
                    Copytright © 2022 <span>Alowishus Delicious</span>
                </p>
                <p className="footer-end_title">Terms of Use | Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
