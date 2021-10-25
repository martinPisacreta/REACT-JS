import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BannerGroup() {
    return (
        <div className="banner-group">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-5">
                        <div className="banner banner-large banner-overlay banner-overlay-light banner-lg banner-1">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-1.jpg` }
                                    threshold={ 200 }
                                    width={ 100 }
                                    height={ 510 }
                                    effect="blur"
                                />
                            </Link>

                            <div className="banner-content banner-content-top">
                                <h4 className="banner-subtitle">Clearence</h4>
                                <h3 className="banner-title">Coffee Tables</h3>
                                <div className="banner-text">from $19.99</div>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="banner banner-overlay banner-lg banner-2">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                <div className="lazy-overlay bg-2"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-2.jpg` }
                                    threshold={ 200 }
                                    height={ 510 }
                                    width={ 100 }
                                    effect="blur"
                                />
                            </Link>

                            <div className="banner-content banner-content-bottom">
                                <h4 className="banner-subtitle text-grey">On Sale</h4>
                                <h3 className="banner-title text-white">Amazing <br />Armchairs</h3>
                                <div className="banner-text text-white">from $39.99</div>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-sm-6">
                                <div className="banner banner-overlay">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                        <div className="lazy-overlay bg-3"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-3.jpg` }
                                            threshold={ 200 }
                                            height={ 245 }
                                            width={ 100 }
                                            effect="blur"
                                        />
                                    </Link>

                                    <div className="banner-content banner-content-top">
                                        <h4 className="banner-subtitle text-grey">New Arrivals</h4>
                                        <h3 className="banner-title text-white">Storage <br />Boxes & Baskets</h3>
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-6 col-sm-6">
                                <div className="banner banner-overlay banner-overlay-light">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-4.jpg` }
                                            threshold={ 200 }
                                            width={ 100 }
                                            height={ 245 }
                                            effect="blur"
                                        />
                                    </Link>

                                    <div className="banner-content banner-content-top">
                                        <h4 className="banner-subtitle">On Sale</h4>
                                        <h3 className="banner-title">Lamps Offer</h3>
                                        <div className="banner-text">up to 30% off</div>
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}