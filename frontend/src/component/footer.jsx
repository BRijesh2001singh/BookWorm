
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>
                    Book<span>Worm</span>
                </h3>

                <p className="footer-links">
                    <a href="/" className="link-1">
                        Home
                    </a>
                    <a href="mailto:brijesh1205singh@gmail.com">Contact</a>
                </p>

                <p className="footer-company-name">Company Name © 2015</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <h4 className='text-white'>Location:</h4>
                    <p>
                        <span>Delhi</span> India
                    </p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>

                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    At BookWorm, we believe in the magic of reading. Whether you are a casual reader or a book enthusiast, our platform offers a vast collection of free online books for you to explore and enjoy. Dive into different genres, discover new favorites, and share your thoughts
                    by leaving reviews.
                </p>

                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/brijesh-singh-a01771217/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/MelonMusk1253" target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/BRijesh2001singh" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
