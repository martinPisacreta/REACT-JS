import React from 'react';
import { Link } from 'react-router-dom';

function CTAOne( props ) {
    return (
        <div className="cta cta-border cta-border-image mb-5 mb-lg-7" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/bg-1.jpg)` } }>
            <div className="cta-border-wrapper bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-11 col-xl-11">
                        <div className="cta-content">
                            <div className="cta-heading">
                                <h3 className="cta-title text-right"><span className="text-primary">New Deals</span> <br />Start Daily at 12pm e.t.</h3>
                            </div>

                            <div className="cta-text">
                                <p>Get <span className="text-dark font-weight-normal">FREE SHIPPING* & 5% rewards</span> on <br />every order with Molla Theme rewards program</p>
                            </div>
                            <Link to="#" className="btn btn-primary btn-round"><span>Add to Cart for $50.00/yr</span><i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( CTAOne );