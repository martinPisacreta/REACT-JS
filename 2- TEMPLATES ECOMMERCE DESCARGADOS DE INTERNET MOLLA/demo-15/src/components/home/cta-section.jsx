import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousels from '../features/owl-carousel';
import { ctaSlider } from '../settings';

function CTA( props ) {
    return (
        <div className="cta cta-separator">
            <div className="row">
                <div className="col-lg-6">
                    <div className="cta-wrapper cta-text text-center">
                        <h3 className="cta-title">Shop Social</h3>
                        <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                        <div className="social-icons social-icons-colored justify-content-center">
                            <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                            <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                            <Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                            <Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                            <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="cta-wrapper text-center">
                        <h3 className="cta-title mb-2">Our Costumers Say</h3>

                        <OwlCarousels adClass="owl-simple owl-testimonials" carouselOptions={ ctaSlider } >
                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. ”</p>

                                <cite>
                                    Charly Smith,
                                        <span>Customer</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque. ”</p>

                                <cite>
                                    Damon Stone
                                        <span>Customer</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. ”</p>

                                <cite>
                                    John Smith
                                        <span>Customer</span>
                                </cite>
                            </blockquote>
                        </OwlCarousels>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( CTA );