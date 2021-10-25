import React from 'react';

function CTATwo ( props ) {
    return (
        <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={ { backgroundImage: "url(assets/images/home/bg-2.jpg)" } }>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6">
                        <div className="cta-heading text-center">
                            <h3 className="cta-title text-white">Subscribe for Our Newsletter</h3>

                            <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>
                        </div>

                        <form action="#">
                            <div className="input-group input-group-round">
                                <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />

                                <div className="input-group-append">
                                    <button className="btn btn-white" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTATwo;