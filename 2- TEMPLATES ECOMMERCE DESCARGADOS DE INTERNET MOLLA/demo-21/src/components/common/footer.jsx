import React from 'react';
import { Link } from 'react-router-dom';

function Footer ( props ) {
    const { logoFooter = "/assets/images/home/logo-footer.png" } = props;
    const { container = "container" } = props;

    return (
        <footer className="footer footer-2">
            <div className={ container }>
                <hr className="mb-7" />
                <div className="row">
                    <div className="col-2xl-5col col-md-12">
                        <div className="widget widget-about">
                            <img src={ `${process.env.PUBLIC_URL}${logoFooter}` } className="footer-logo" alt="Footer Logo" width="100" height="25" />
                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>

                            <div className="widget-about-info">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 phoneNum">
                                        <span className="widget-about-title">Got Question? Call us 24/7</span>
                                        <Link to="tel:123456789">+0123 456 789</Link>
                                    </div>
                                    <div className="col-sm-6 col-md-8 payment">
                                        <span className="widget-about-title">Payment Method</span>
                                        <figure className="footer-payments">
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">Information</h4>

                            <ul className="widget-list">
                                <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-5col col-sm-4 col-md-6=4">
                        <div className="widget">
                            <h4 className="widget-title">Customer Service</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Payment Methods</Link></li>
                                <li><Link to="#">Money-back guarantee!</Link></li>
                                <li><Link to="#">Returns</Link></li>
                                <li><Link to="#">Shipping</Link></li>
                                <li><Link to="#">Terms and conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-5col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">My Account</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Sign In</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                <li><Link to="#">Track My Order</Link></li>
                                <li><Link to="#">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ container }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li><Link to="#">Terms Of Use</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>
                        <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                        <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                        <Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                        <Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                        <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );