import React from 'react';

export default function CTA () {
    return (
        <div className="background" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/banners/newsletter.jpg)` } }>
            <div className="subscribe">
                <div className="subscribe-title text-center">
                    <h1 className="intro-title2nd">SUBSCRIBE FOR OUR NEWSLETTER</h1>

                    <h1 className="intro-title1st">Learn about new offers and get more deals by joining our newsletter</h1>
                </div>
                <form action="#">
                    <div className="input-group">
                        <input type="email" className="news" placeholder="Enter your Email Address" aria-label="Email Adress" required />

                        <div className="input-group-append">
                            <button className="btn btn-subscribe" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}