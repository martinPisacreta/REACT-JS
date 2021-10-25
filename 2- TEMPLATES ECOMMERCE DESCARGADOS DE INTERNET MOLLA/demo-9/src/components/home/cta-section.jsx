import React from 'react';

export default function CTA () {
    return (
        <div className="cta pt-4 pt-lg-6 pb-5 pb-lg-7 mb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6">
                        <div className="cta-heading text-center">
                            <h3 className="cta-title">Sign Up for updates from Molla</h3>

                            <p className="cta-desc">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>
                        </div>

                        <form action="#">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />

                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" title="Sing up"><i className="icon-long-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}