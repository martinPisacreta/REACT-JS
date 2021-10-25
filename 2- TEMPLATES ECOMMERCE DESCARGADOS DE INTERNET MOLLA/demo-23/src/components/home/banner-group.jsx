import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BannerGroup () {
    return (
        <>
            <div className="banner-lg">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="banner"
                        src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-1.jpg` }
                        threshold={ 100 }
                        width={ 1480 }
                        height={ 730 }
                        effect="blur"
                    />
                </Link>

                <div className="intro">
                    <div className="title">
                        <h3>Our New Collection</h3>
                    </div>

                    <div className="content"><h4>Urban Spirit<br />Collection 2020</h4></div>

                    <p>It started with a simple idea</p>

                    <div className="action">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="banner-sm">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <div className="lazy-overlay"></div>

                        <LazyLoadImage
                            alt="banner"
                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-2.jpg` }
                            threshold={ 100 }
                            width={ 730 }
                            height={ 390 }
                            effect="blur"
                        />
                    </Link>

                    <div className="intro">
                        <div className="title">
                            <h3>Final Days of Sale</h3>
                        </div>

                        <div className="content"><h4>Sportswear &amp; Outdoor Wear<br />UP TO 70% OFF</h4></div>

                        <div className="action">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
                <div className="banner-sm">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <div className="lazy-overlay"></div>

                        <LazyLoadImage
                            alt="banner"
                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-3.jpg` }
                            threshold={ 100 }
                            width={ 730 }
                            height={ 390 }
                            effect="blur"
                        />
                    </Link>

                    <div className="intro">
                        <div className="title">
                            <h3>Summer Clearance</h3>
                        </div>

                        <div className="content"><h4>Shoes &amp; Accessories<br />UP TO 30% OFF</h4></div>

                        <div className="action">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}