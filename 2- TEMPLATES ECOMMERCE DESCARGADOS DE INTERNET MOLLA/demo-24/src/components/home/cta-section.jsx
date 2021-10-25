import React from 'react';

export default function CTA () {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="heading">
                    <p className="heading-cat">Get The Latest News & Deals</p>

                    <h3 className="heading-title">Stay In The Know</h3>
                </div>

                <div className="col-lg-6 subscribe-form">
                    <form action="#">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required />

                            <div className="input-group-append">
                                <button className="btn btn-subscribe" type="submit"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}