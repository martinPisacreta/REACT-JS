import React from 'react';
import { Link } from 'react-router-dom';

function Footer ( props ) {
    return (
        <footer className="footer pt-0">
            <section className="footer-bottom mt-0">
                <div className="col-xl-8-3col col-md-12">
                    <div className="widget widget-about">

                        <h4 className="widget-title">About us</h4>

                        <p>Praesent dapibus, neque id cursus ucibus, tortor  neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>

                        <div className="widget-about-info">
                            <div className="payment">
                                <span className="widget-about-title">Payment Method</span>
                                <figure className="footer-payments">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-8-2col col-sm-4 col-md-4">
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

                <div className="col-xl-8-2col col-sm-4 col-md-4">
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

                <div className="col-xl-8-1col col-sm-4 col-md-4">
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
            </section>
        </footer>
    );
}

export default React.memo( Footer );