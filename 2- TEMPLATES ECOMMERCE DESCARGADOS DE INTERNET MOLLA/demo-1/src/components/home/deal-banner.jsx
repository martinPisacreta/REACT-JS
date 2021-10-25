import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { rendererThree } from '../features/count-down';

export default function DealBanner() {
    return (
        <div className="deal">
            <div className="deal-content">
                <h4>Limited Quantities</h4>
                <h2>Deal of the Day</h2>

                <h3 className="product-title">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>POÄNG</Link>
                </h3>

                <div className="product-price">
                    <span className="new-price">$149.00</span>
                    <span className="old-price">Was $240.00</span>
                </div>

                <div className="deal-countdown" data-until="+10h">
                    <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererThree } />
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                    <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                </Link>
            </div>

            <div className="deal-image position-relative">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="deal-banner"
                        src={ `${process.env.PUBLIC_URL}/assets/images/home/deal/product-1.jpg` }
                        threshold={ 100 }
                        effect="blur"
                        width={ 100 }
                        height={ 460 }
                    />
                </Link>
            </div>
        </div>
    )
}