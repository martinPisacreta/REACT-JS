import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {

    function ctaFormFocusIn() {
        document.querySelector( '.input-group' ).querySelector( '.btn' ).style.borderColor = "#c66";
    }

    function ctaFormFocusOut() {
        document.querySelector( '.input-group' ).querySelector( '.btn' ).style.borderColor = "#e1e1e1";
    }

    return (
        <div className="container">
            <div className="cta cta-separator mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cta-wrapper cta-text text-center">
                            <h3 className="cta-title">Shop Social</h3>
                            <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                            <div className="social-icons social-icons-colored justify-content-center">
                                <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                <Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                                <Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                                <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="cta-wrapper text-center">
                            <h3 className="cta-title">Get the Latest Deals</h3>
                            <p className="cta-desc">and <br />receive <span className="text-primary">$20 coupon</span> for first shopping</p>

                            <form action="#">
                                <div className="input-group" onFocus={ ctaFormFocusIn } onBlur={ ctaFormFocusOut }>
                                    <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary btn-rounded" type="submit"><i className="icon-long-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( CTASection );