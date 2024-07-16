
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="pt-12 bg-[linear-gradient(rgb(4_3_3/60%),rgb(0_0_0/33%)),url(components/assets/pic2.jpg)] text-white  ">
        <div className="container z-10 flex flex-wrap justify-center mx-auto">
            <div className="w-full mb-8 text-center sm:w-1/3 sm:mb-0">
                <h3 className="mb-4 text-2xl">Contact Us</h3>
                <p className="mb-2">Email: info@example.com</p>
                <p className="mb-2">Phone: +121 56556 565556</p>
                <p className="mb-2">Address: Your Address 123 street</p>
            </div>
            <div className="w-full mb-8 text-center sm:w-1/3 sm:mb-0">
                <h3 className="mb-4 text-2xl">Quick Links</h3>
                <ul className="p-0 list-none">
                    <li className="mb-2"><a className="hover:text-white hover:opacity-60" href="/">Home</a></li>
                    <li className="mb-2"><a className="hover:text-white hover:opacity-60" href="/about">About</a></li>
                    <li className="mb-2"><a className="hover:text-white hover:opacity-60" href="/products">Products</a></li>
                    <li className="mb-2"><a className="hover:text-white hover:opacity-60" href="/contact">Contact</a></li>
                    <li className="mb-2"><a className="hover:text-white hover:opacity-60" href="/sign-in">Sign-In</a></li>
                </ul>
            </div>
            <div className="w-full text-center sm:w-1/3">
                <h3 className="mb-4 text-2xl">Follow Us</h3>
                <ul className="flex justify-center p-0 list-none">
                    <li className="mx-2">
                        <a className='no-underline' href="#">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white hover:text-white hover:opacity-60" />
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className='no-underline' href="#">
                            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white hover:text-white hover:opacity-60" />
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className='no-underline' href="#">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-white hover:opacity-60" />
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className='no-underline' href="#">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-white hover:opacity-60" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="py-2 mt-8 text-center bg-backgroundColor">
            <p className="m-0">&copy; 2023 Your Company. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;
