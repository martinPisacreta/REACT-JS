import React from 'react';

function Newsletter( props ) {
    return (
        <div className="cta cta-horizontal cta-horizontal-box bg-image mb-4" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/bg-2.jpg)` } }>
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h3 className="cta-title text-primary">Join Our Newsletter</h3>
                    <p className="cta-desc text-light">Subcribe to get information about products and coupons</p>
                </div>

                <div className="col-lg-7 d-flex justify-content-lg-end">
                    <form action="#">
                        <div className="input-group">
                            <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                            <div className="input-group-append">
                                <button className="btn btn-primary-white btn-rounded" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;