import React from 'react';

export default function CTA() {
    return (
        <div className="footer-newsletter bg-image" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-2.jpg)` } }>
            <div className="container">
                <div className="heading text-center">
                    <h3 className="title">Get The Latest Deals</h3>
                    <p className="title-desc">and receive <span>$20 coupon</span> for first shopping</p>
                </div>

                <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <form action="#">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" aria-describedby="newsletter-btn" required />

                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" id="newsletter-btn"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}