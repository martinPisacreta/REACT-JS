import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function BannerGroupTwo( props ) {
    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4">
                <div className="banner banner-overlay banner-sm banner-ad content-right align-center">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <div className="lazy-overlay bg-3"></div>

                        <LazyLoadImage
                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-6.jpg` }
                            alt="Banner"
                            width={ 100 }
                            height={ 260 }
                            effect="blur"
                        />
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle">Weekend Offer</h4>
                        <img className="banner-title-img" src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-6-title.png` } alt="Banner-6" />
                        <h4 className="banner-price"><span className="price">Save $19.99</span></h4>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="banner banner-overlay banner-sm banner-ad content-left align-center">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <div className="lazy-overlay bg-3"></div>

                        <LazyLoadImage
                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-7.jpg` }
                            alt="Banner"
                            width={ 100 }
                            height={ 260 }
                            effect="blur"
                        />
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle">Amazing Deal on an</h4>
                        <img className="banner-title-img" src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-7-title.png` } alt="Banner-7" />
                        <h4 className="banner-txt">Console</h4>
                        <h4 className="banner-price color-black mt-3">Save $50</h4>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="banner banner-overlay banner-sm banner-ad content-left align-center">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <div className="lazy-overlay bg-3"></div>

                        <LazyLoadImage
                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-8.jpg` }
                            alt="Banner"
                            width={ 100 }
                            height={ 260 }
                            effect="blur"
                        />
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-price text-white mb-1">Save $29.00</h4>
                        <img className="banner-title-img mb-2" src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-8-title.png` } alt="Banner-8" />
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Buy Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerGroupTwo;