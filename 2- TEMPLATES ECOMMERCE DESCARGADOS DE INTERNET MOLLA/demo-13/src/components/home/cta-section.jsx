import React from 'react';

function CTA( props ) {
    return (
        <div className="cta cta-horizontal cta-horizontal-box bg-primary">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2xl-5col">
                        <h3 className="cta-title text-white">Join Our Newsletter</h3>
                        <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>
                    </div>

                    <div className="col-3xl-5col">
                        <form action="#">
                            <div className="input-group">
                                <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;