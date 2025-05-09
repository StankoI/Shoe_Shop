import { Link } from 'react-router-dom';
import './footer.css'
import { useState } from 'react';

const Footer = () => {

    const [focused, setFocused] = useState(false);

    const logo = () => {
        return (
            <div className="logo">
                <Link to="/" className="logo-link">
                    <div className="logo-icon">E</div>
                    <div className="logo-text">EcoStride</div>
                </Link>
            </div>
        );
    }

    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        {logo()}
                        <div className='footer-text'>Sustainable footwear for a better tomorrow. Step into comfort, walk with style.</div>
                        <div className='social-media'>
                            <div className='social-media-icon'></div>
                            <div className='social-media-icon'></div>
                            <div className='social-media-icon'></div>
                            <div className='social-media-icon'></div>
                        </div>
                    </div>
                    <div className='footer-links-div'>
                        <div className='section-name'>Shop</div>
                        <a>All Products</a>
                        <a>Man</a>
                        <a>Woman</a>
                        <a>Sustainable Collection</a>
                        <a>New Arrival</a>
                        <a>Sale</a>
                    </div>
                    <div className='footer-links-div'>
                        <div className='section-name'>Company</div>
                        <a>About Us</a>
                        <a>Sustainability</a>
                        <a>Careers</a>
                        <a>Contact Us</a>
                        <a>Blog</a>
                        <a>Press</a>
                    </div>
                    <div className='footer-links-div'>
                        <div className='section-name'>Contact</div>
                        <div className='footer-text'>Sofia, Studentski grad, blok 18</div>
                        <div className='footer-text'>+359 878 381 728</div>
                        <div className='footer-text'>info@ecostride.com</div>
                        <div className='footer-text'>Subscribe to our newsletter</div>
                        <form className={`email-form ${focused ? "focused" : ""}`}>
                            <input type="email" placeholder="Your email"
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)} required />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-below'>
                <div className='footer-below-copyright-and-likns'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} EcoStride. All rights reserved.
                        </p>
                    </div>
                    <div className='footer-below-links'>
                        <a>
                            Privacy Policy
                        </a>
                        <a>
                            Terms of Service
                        </a>
                        <a>
                            Cookie Policy
                        </a>
                        <a>
                            Accessibility
                        </a>
                    </div>
                </div>
                <div className='footer-below-more'>
                    <div className='footer-below-more-info'>Carbon Neutral</div>
                    <div className='footer-below-more-info'>Sustainable Materials</div>
                    <div className='footer-below-more-info'>Ethical Production</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;