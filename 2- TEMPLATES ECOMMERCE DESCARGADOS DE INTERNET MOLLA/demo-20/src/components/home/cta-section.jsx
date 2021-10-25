import React from 'react';

export default function CTASection( props ) {
    return (
        <div className="cta-newsletter text-center pt-6 pb-7">
            <div className="container">
                <span className="cta-icon"><i className="icon-envelope"></i></span>
                <h3 className="title">Subscribe for Our Newsletter</h3>
                <p className="title-desc">Learn about new offers and get more deals by joining our newsletter</p>

                <form action="#">
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" aria-describedby="newsletter-btn" required />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit" id="newsletter-btn"><span>SUBSCRIBE</span><i className="icon-long-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}