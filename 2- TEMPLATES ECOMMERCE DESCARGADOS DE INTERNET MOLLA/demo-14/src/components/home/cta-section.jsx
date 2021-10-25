import React from 'react';

export default () => (
    <div className="cta cta-horizontal cta-horizontal-box bg-dark bg-image" style={ { backgroundImage: "url('assets/images/demos/demo-14/bg-1.jpg')" } }>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-8 offset-xl-2">
                    <div className="row align-items-center">
                        <div className="col-lg-5 cta-txt">
                            <h3 className="cta-title text-primary">Join Our Newsletter</h3>
                            <p className="cta-desc text-light">Subcribe to get information about products and coupons</p>
                        </div>

                        <div className="col-lg-7">
                            <form action="#">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);