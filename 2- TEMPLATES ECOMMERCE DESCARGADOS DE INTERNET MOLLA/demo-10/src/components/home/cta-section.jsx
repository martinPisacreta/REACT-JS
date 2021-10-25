import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA () {
    return (
        <div className="cta cta-horizontal cta-horizontal-box bg-image mb-4 mb-lg-6" style={ { backgroundImage: "url(assets/images/home/bg-1.jpg)" } }>
            <div className="row flex-column flex-lg-row align-items-lg-center">
                <div className="col">
                    <h3 className="cta-title text-primary">New Deals! Start Daily at 12pm e.t.</h3>

                    <p className="cta-desc">Get <em className="font-weight-medium">FREE SHIPPING* & 5% rewards</em> on every order with Molla Theme rewards program</p>
                </div>

                <div className="col-auto">
                    <Link to="#" className="btn btn-white-primary btn-round">
                        <span>Add to Cart for $50.00/yr</span><i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}